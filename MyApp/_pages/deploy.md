---
title: Deploying with Kamal
---

ServiceStack templates now support deployment using Kamal, a CLI tool from the BaseCamp team that simplifies containerized application deployments. Kamal wraps SSH and Docker to streamline self-hosting while maintaining GitHub Actions as the CI runner.

<lite-youtube class="w-full mx-4 my-4" width="560" height="315" videoid="-mDJfRG8mLQ" style="background-image: url('https://img.youtube.com/vi/-mDJfRG8mLQ/maxresdefault.jpg')"></lite-youtube>

## Overview

Kamal enables simple commands to deploy containerized applications to Linux hosts, handling:
- Bootstrap configuration
- Reverse proxy setup
- SSL certificate provisioning
- Zero-downtime deployments
- Health checks on deploy
- Rolling back changes

::: info
Kamal is built by the BaseCamp team, developers of Hey email service and BaseCamp project management tool. For comprehensive documentation on all Kamal features, visit [https://kamal-deploy.org/](https://kamal-deploy.org/)
:::

## Getting Started

### Prerequisites
- A domain name
- A Linux host (e.g., VPS from providers like Hetzner)
- GitHub account for CI/CD

### Initial Setup

1. Create a new ServiceStack application:
```bash
x new blazor-vue MyApp
```

2. Generate deployment SSH key:
```bash
ssh-keygen -t ed25519 -C "deploy@myapp" -f ./deploy-key
```

3. Copy public key to enable server access:
```bash
cat ~/deploy-key.pub | ssh <user>@<your-ip> "cat >> ~/.ssh/authorized_keys"
```

### GitHub Actions

The template includes a GitHub Actions workflow that is broken up into 3 steps that trigger on push to the `main` branch, and then on successful build and test, it will deploy the application to your server.

Once you create your GitHub repository, add the `SSH_PRIVATE_KEY` secret to your repository settings with the contents of your private key file.

```bash
gh secret set PRIVATE_SSH_KEY < ~/deploy-key
```

### Configuration

Update `config/deploy.yml` with your deployment settings:

```yaml
service: myapp
image: your-github-username/myapp

servers:
  web:
    - <your-server-ip-address>

proxy:
  ssl: true
  host: myapp.example.com
```

::: info
The `image` value should match your GitHub repository path on ghcr.io. For example: `ghcr.io/username/repository`
:::

Once you make these changes, commit and push to your repository to trigger the GitHub Actions workflow.

Kamal will deploy the required services including Docker and Kamal Proxy if you server doesn't already have them installed.

:::info
When using ASP.NET Core applications with Kamal-Proxy, ensure your application is running with the environment variable `ASPNETCORE_FORWARDEDHEADERS_ENABLED` set to `true`.
The template has this by default, but if you are getting errors with 302 redirects, ensure this is set.
:::

The authentication between GitHub Container Registry (ghcr.io) and your server is handled by the GitHub Actions workflow, the `deploy.yml` and [Kamal Secrets](https://kamal-deploy.org/docs/configuration/environment-variables/#secrets).

:::info
You can still use the Kamal CLI locally, but if you want to directly push deployments with `kamal deploy`, you will need to locally populate `KAMAL_REGISTRY_USER` and `KAMAL_REGISTRY_PASSWORD` with your GitHub username and a GitHub Personal Access Token with `read:packages` scope.
:::

## Common Kamal Commands

Kamal provides several useful commands for managing your deployment:

```bash
# View deployment details
kamal details

# Check application logs
kamal app logs

# Deploy new version
kamal deploy

# Restart application
kamal app boot
```

::: info
Kamal commands are context-aware and will use the configuration from your current application directory. This makes managing multiple applications across different servers a lot easier as more applications are added.
:::

## Additional Containers

Kamal supports extensive configuration options including "accessories" for additional features like databases, caches, and more. See the [Kamal documentation](https://kamal-deploy.org/docs/configuration/accessories/) for more information.

## Troubleshooting

### Initial deployment fails

If you are having issues with the initial deployment, an earlier bootstrap of the server via GitHub Actions may have failed.
Delete the `.<app-name>` file in your deployment user's home directory and re-run the GitHub Actions workflow to re-bootstrap the server.

### Missing the service label

If you are getting:

Image ghcr.io/netcoreapps/northwindauto:latest is missing the 'service' label

Ensure that your AppHost csproj file has `ContainerLabel` with the value matching the `service` in your `deploy.yml` file.