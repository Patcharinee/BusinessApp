#!/bin/bash

# Business Calculator App Deployment Script
# This script can be used locally or in CI/CD

set -e  # Exit on any error

echo "🚀 Starting deployment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down

# Build and start the application
echo "🔨 Building and starting the application..."
docker-compose up --build -d businessapp-dev

# Wait for the application to be ready
echo "⏳ Waiting for application to be ready..."
sleep 10

# Check if the application is running
if curl -f http://localhost:5173 > /dev/null 2>&1; then
    echo "✅ Deployment successful!"
    echo "🌐 Application is running at: http://localhost:5173"
    echo "🌐 Network access: http://192.168.1.128:5173"
else
    echo "❌ Deployment failed. Application is not responding."
    echo "📋 Checking container logs..."
    docker-compose logs businessapp-dev
    exit 1
fi

echo "🎉 Deployment completed successfully!" 