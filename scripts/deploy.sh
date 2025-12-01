#!/bin/bash

set -e #Si ça fail tout s'arrete

echo "compose down"
docker compose down

echo "compose build"
docker compose build

echo "compose up -d"
docker compose up -d

echo "On wait le compose up"
sleep 30

echo "on vérifie que db & api & front sont up"
docker compose exec -T database pg_isready -U appuser
curl -s http://localhost:4000/status
curl -s -o /dev/null -w "HTTP Status: %{http_code}\n" http://localhost:8080

echo "Fin du deploy"