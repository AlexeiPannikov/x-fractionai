#!/bin/bash

# Variables
IMAGE_NAME="x-application"
REGISTRY="registry.digitalocean.com/adstat-digital-1"
REMOTE_SERVER="62.60.234.87"
REMOTE_USER="root"
REMOTE_PORT="22"
REMOTE_DIR="/root/x-application"

# Step 1: Build the Docker image
echo "Building Docker image..."
docker buildx build --platform linux/amd64 -t $REGISTRY/$IMAGE_NAME:latest .

# Step 2: Push the Docker image to the registry
echo "Pushing image to DigitalOcean registry..."
docker push $REGISTRY/$IMAGE_NAME:latest

# Step 3: SSH into the remote server and deploy using docker-compose
echo "Deploying on remote server..."
ssh -p $REMOTE_PORT $REMOTE_USER@$REMOTE_SERVER << EOF
  set -e

  # Create app directory if it doesn't exist
  mkdir -p $REMOTE_DIR

  # Navigate to app directory
  cd $REMOTE_DIR

  # Stop and remove existing containers (if any)
  docker compose -f docker-compose.prod.yml down || true

  # Generate docker-compose.prod.yml
  cat > docker-compose.prod.yml << COMPOSE
version: '3.8'

services:
  php-app:
    image: $REGISTRY/$IMAGE_NAME:latest
    ports:
      - "3000:80"
    restart: always
    environment:
      - APP_ENV=production
COMPOSE

  # Pull latest image
  docker pull $REGISTRY/$IMAGE_NAME:latest

  # Start container using the production Compose file
  docker compose -f docker-compose.prod.yml up -d
EOF

# Confirmation
echo "✅ Application successfully deployed using docker-compose.prod.yml!"
