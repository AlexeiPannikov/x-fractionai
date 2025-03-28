#!/bin/bash

# Variables
IMAGE_NAME="x-application"
REGISTRY="registry.digitalocean.com/adstat-digital-1"
REMOTE_SERVER="62.60.234.87"
REMOTE_USER="root"
REMOTE_PORT="22"

# Step 1: Build the Docker image
echo "Building Docker image..."
docker buildx build --platform linux/amd64 -t $REGISTRY/$IMAGE_NAME:latest .

# Step 2: Push the Docker image to the registry
echo "Pushing image to DigitalOcean registry..."
docker push $REGISTRY/$IMAGE_NAME:latest

# Step 3: SSH into the remote server and pull the Docker image
echo "Pulling image on remote server..."
ssh -p $REMOTE_PORT $REMOTE_USER@$REMOTE_SERVER << EOF
  docker pull $REGISTRY/$IMAGE_NAME:latest
EOF

# Step 4: Run the Docker container on the remote server
echo "Running container on remote server..."
ssh -p $REMOTE_PORT $REMOTE_USER@$REMOTE_SERVER << EOF
  # Stop any existing containers
  docker stop x-application || true
  docker rm x-application || true

  # Run the new container
  docker run -d --name x-application -p 8080:3000 $REGISTRY/$IMAGE_NAME:latest
EOF

# Confirmation
echo "Container is now running on remote server!"
