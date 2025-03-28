# Stage 1: Build the application
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install only production dependencies
RUN npm prune --production

# Stage 2: Serve the built application
FROM node:18 AS runner

# Set the working directory inside the container
WORKDIR /app

# Copy the built application and production dependencies from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expose the application port
EXPOSE 3000

# Default environment to production
ENV NODE_ENV=production

# Define a health check (optional)
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
  CMD curl -f http://localhost:3000 || exit 1

# Start the application with Next.js
CMD ["npx", "next", "start", "-p", "3000"]
