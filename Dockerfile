FROM oven/bun:latest AS builder
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

RUN bun build ./src/index.ts --compile --outfile server-app

FROM debian:bookworm-slim
WORKDIR /app

COPY --from=builder /app/server-app .

EXPOSE 3000

CMD ["./server-app"]

