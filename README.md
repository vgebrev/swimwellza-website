# Swimwell Website

A modern, elegant, and responsive marketing website for Swimwell, built with Next.js and Tailwind CSS.

## Features

- **Modern Design**: Glassmorphism effects, custom "sunlight in water" hero background.
- **Responsive**: Mobile-first design with dynamic viewport units (`dvh`) for perfect mobile rendering.
- **Performance**: Optimized images and fonts (Geist).
- **Deployment Ready**: Configured for Docker (distroless) and IIS reverse proxy.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project includes a comprehensive deployment setup for Windows/IIS environments using Docker.

### Automated Deployment

Use the included PowerShell script to build, ship, and run the application on a remote host:

```powershell
./deploy.ps1 -TargetHost "your-host" -TargetDir "c:\path\to\docker"
```

See `deployment.md` for full details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
