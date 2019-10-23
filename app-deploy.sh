#!/usr/bin/env bash

echo "Building app image..."
docker build -t registry.gitlab.com/lcainswebdeveloper/vueblog -f Dockerfile.prod .

echo "Pushing app image..."
docker push registry.gitlab.com/lcainswebdeveloper/vueblog