#!/bin/bash

set -e

DOCKER_USERNAME="aerolight"
IMAGES=("rendu-projet-docker-api:latest" "rendu-projet-docker-frontend:latest")

export DOCKER_CONTENT_TRUST=1

for image in "${IMAGES[@]}"; do

    remote_tag="${DOCKER_USERNAME}/${image}"
    
    docker tag "$image" "$remote_tag"
    docker push "$remote_tag"
done

# Je n'arrive pas à signer les images, je les ai push sans signature ducoup...