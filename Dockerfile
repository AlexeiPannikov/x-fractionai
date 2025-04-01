# --- Stage 1: Build Next.js Static Site ---
FROM node:18 AS builder

WORKDIR /app

# Copy necessary files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app (Next.js source code, config, pages, etc.)
COPY . .

# Build static site using `output: 'export'`
RUN npm run build && mv out/index.html out/site.html

# --- Stage 2: PHP Apache server ---
FROM php:8.2-apache

# Install dependencies for PHP extensions
RUN apt-get update && apt-get install -y \
    libcurl4-openssl-dev \
    && docker-php-ext-install curl \
    && rm -rf /var/lib/apt/lists/*

# Copy PHP files
COPY index.php /var/www/html/

# Copy Next.js static output from the previous stage
COPY --from=builder /app/out/ /var/www/html/

WORKDIR /var/www/html
