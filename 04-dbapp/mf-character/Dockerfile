# syntax=docker/dockerfile:1.7

# ---------- Stage 1: build ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Dependencias primero para aprovechar cache de Docker
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copia el resto del código y construye los estáticos
COPY . .
RUN yarn build

# ---------- Stage 2: runtime ----------
FROM node:22-alpine AS runner

WORKDIR /app

# "serve" es un servidor estático liviano mantenido por Vercel
RUN npm install -g serve@14

# Solo traemos el bundle final desde la etapa builder
COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production
ENV PORT=8083

EXPOSE 8083

# -s = modo SPA (fallback a index.html, necesario para react-router)
# -l = listen en el puerto indicado
CMD ["serve", "-s", "dist", "-l", "8083"]
