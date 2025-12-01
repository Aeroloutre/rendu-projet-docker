#!/bin/bash
echo "scan avec docker scout"

mkdir -p security-reports

IMAGES=("rendu-projet-docker-api:latest" "rendu-projet-docker-frontend:latest")

#scan de chaque image
for image in "${IMAGES[@]}"; do
    echo "scan de $image..."
    
    # Scanner avec Docker Scout (intégré à Docker)
    docker scout cves "$image" > "security-reports/${image//:/-}_report.txt" 2>&1
done

echo "fin du scan"