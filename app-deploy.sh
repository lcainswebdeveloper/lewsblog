#!/usr/bin/env bash

echo "Building app image..."
docker build -t lcainswebdeveloper/vueblog:0.3 -f Dockerfile.prod .

echo "Pushing app image..."
docker push lcainswebdeveloper/vueblog:0.3