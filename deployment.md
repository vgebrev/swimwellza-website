# Deployment Guide

## Docker Deployment

This project is configured to run as a Docker container using a distroless Node.js image for minimal footprint and enhanced security.

### Prerequisites

- Docker installed on the host machine.
- Docker Compose installed.

### Automated Deployment Script

A PowerShell script `deploy.ps1` is provided to automate the deployment process (Build -> Save -> Copy -> Load -> Run).

**Usage:**

1. Copy `deploy.config.example.json` to `deploy.config.json`.
2. Edit `deploy.config.json` with your target host and directory.
3. Run the script:

```powershell
./deploy.ps1
```

Alternatively, you can override the config by passing parameters:

```powershell
./deploy.ps1 -TargetHost "your-ssh-alias" -TargetDir "c:\path\to\deployment"
```

**Important: SSH Configuration**

The `TargetHost` parameter should be an **SSH alias** configured in your `~/.ssh/config` file (or `C:\Users\YourUser\.ssh\config` on Windows). This ensures secure connection without exposing IP addresses or requiring manual password entry.

Example `config` entry:

```text
Host my-production-server
    HostName 192.168.1.100
    User Administrator
    IdentityFile ~/.ssh/id_rsa
```

**What it does:**
1. Builds the Docker image locally.
2. Saves the image to a `.tar` file.
3. Copies the `.tar` file and `docker-compose.yml` to the remote host via `scp`.
4. Connects via `ssh` to:
   - Stop and remove the existing container.
   - Remove the old image.
   - Load the new image from the `.tar` file.
   - Start the new container using `docker-compose`.

**Prerequisites:**
- `scp` and `ssh` must be available and configured.
- The remote host must have Docker and Docker Compose installed.
- The remote directory should exist (the script attempts to create it).

### IIS Reverse Proxy Configuration

To expose the application via IIS, you need to set up a reverse proxy rule.

### Prerequisites

- IIS installed.
- **URL Rewrite** module installed.
- **Application Request Routing (ARR)** module installed and proxy enabled.

### Configuration

1. Create a new Website in IIS or use an existing one.
2. Point the physical path to a folder containing the `web.config` file created in this project.
3. The `web.config` contains a rewrite rule that forwards all traffic to `http://localhost:3002`.

**web.config content:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="ReverseProxyInboundRule1" stopProcessing="true">
                    <match url="(.*)" />
                    <action type="Rewrite" url="http://localhost:3002/{R:1}" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
```

### Troubleshooting

- Ensure port 3002 is not blocked by a firewall.
- If the IIS site gives a 502 error, ensure the Docker container is running and accessible at `http://localhost:3002`.
