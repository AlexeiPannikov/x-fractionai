FROM php:8.2-apache

# Install dependencies for cURL
RUN apt-get update && apt-get install -y \
    libcurl4-openssl-dev \
    && docker-php-ext-install curl \
    && rm -rf /var/lib/apt/lists/*

# Copy both files into the Apache server directory
COPY index.php site.html /var/www/html/

WORKDIR /var/www/html
