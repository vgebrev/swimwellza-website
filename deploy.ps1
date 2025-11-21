param(
    [string]$TargetHost,
    [string]$TargetDir
)

# Load config from file if present
if (Test-Path "deploy.config.json") {
    try {
        $config = Get-Content "deploy.config.json" -Raw | ConvertFrom-Json
        if (-not $TargetHost) { $TargetHost = $config.TargetHost }
        if (-not $TargetDir) { $TargetDir = $config.TargetDir }
    }
    catch {
        Write-Warning "Failed to load deploy.config.json: $_"
    }
}

# Validate required parameters
if (-not $TargetHost -or -not $TargetDir) {
    Write-Error "TargetHost and TargetDir must be provided via arguments or deploy.config.json"
    exit 1
}

$ErrorActionPreference = "Stop"

function Invoke-RemoteCommand {
    param(
        [string]$Description,
        [string]$Command
    )
    Write-Host $Description -ForegroundColor Cyan
    ssh $TargetHost $Command
    if ($LASTEXITCODE -ne 0) { 
        Write-Warning "Command '$Description' returned exit code $LASTEXITCODE. Proceeding..."
    }
}

Write-Host "Starting deployment to $TargetHost..." -ForegroundColor Cyan

# 1. Build the image
Write-Host "1. Building Docker image..." -ForegroundColor Green
docker build -t swimwell-website:latest .
if ($LASTEXITCODE -ne 0) { Write-Error "Build failed"; exit 1 }

# 2. Save the image to tar
Write-Host "2. Saving image to swimwell-website.tar..." -ForegroundColor Green
docker save -o swimwell-website.tar swimwell-website:latest
if ($LASTEXITCODE -ne 0) { Write-Error "Docker save failed"; exit 1 }

# 3. Prepare remote environment
Write-Host "3. Preparing remote host $TargetHost..." -ForegroundColor Green
ssh $TargetHost "mkdir ""$TargetDir"" 2>NUL || echo Directory might already exist"

# 4. Copy files to remote host
Write-Host "4. Copying files to $TargetHost..." -ForegroundColor Green
scp swimwell-website.tar "${TargetHost}:${TargetDir}\swimwell-website.tar"
scp docker-compose.yml "${TargetHost}:${TargetDir}\docker-compose.yml"
if ($LASTEXITCODE -ne 0) { Write-Error "SCP failed"; exit 1 }

# 5. Remote execution
Write-Host "5. Executing remote commands..." -ForegroundColor Green

# Stop existing containers
Invoke-RemoteCommand -Description "Stopping existing containers..." -Command "cd /d ""$TargetDir"" && docker-compose down"

# Remove old image (conditional)
Invoke-RemoteCommand -Description "Removing old image..." -Command "docker rmi swimwell-website:latest || echo Image not found, skipping removal"

# Load new image
Invoke-RemoteCommand -Description "Loading new image..." -Command "cd /d ""$TargetDir"" && docker load -i swimwell-website.tar"

# Start new container
Invoke-RemoteCommand -Description "Starting new container..." -Command "cd /d ""$TargetDir"" && docker-compose up -d"

Write-Host "Deployment successful!" -ForegroundColor Green

# Cleanup local tar
Remove-Item swimwell-website.tar
