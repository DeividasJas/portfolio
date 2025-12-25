# Deploy Workflow Explanation

## Overview
This GitHub Actions workflow automatically deploys your portfolio to a server whenever code is pushed to the main branch.

## Line-by-Line Breakdown

### Workflow Configuration
- **Line 1**: Names the workflow "Deploy static portfolio"
- **Lines 3-6**: Triggers the workflow on pushes to the `main` branch

### Job Setup
- **Lines 8-10**: Defines a job named "deploy" that runs on Ubuntu latest

### Build Steps

#### 1. Checkout Code (Line 13)
- Uses `actions/checkout@v4` to clone your repository

#### 2. Setup Node.js (Lines 15-17)
- Uses `actions/setup-node@v4` to install Node.js version 20

#### 3. Setup pnpm (Lines 19-21)
- Uses `pnpm/action-setup@v3` to install pnpm version 9 (package manager)

#### 4. Install Dependencies (Line 23)
- Runs `pnpm install --frozen-lockfile` to install packages without updating lockfile

#### 5. Build Project (Line 24)
- Runs `pnpm run build` to create production-ready files in `dist/` folder

#### 6. Deploy via rsync (Lines 26-33)
- Uses `burnett01/rsync-deployments@7.0.2` to sync files to your server
- **Line 28**: rsync flags: archive mode, verbose, compress, delete old files, no group ownership
- **Line 29**: Source path is `dist/` (build output)
- **Line 30**: Destination is `/var/www/portfolio` on remote server
- **Lines 31-33**: SSH connection details stored as GitHub secrets

## Security Notes
- SSH credentials (`SSH_HOST`, `SSH_USER`, `SSH_KEY`) are stored as encrypted GitHub secrets
- The workflow only deploys from the main branch
