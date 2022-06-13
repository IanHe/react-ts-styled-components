#!/bin/bash

# AWS ECR login
aws ecr get-login-password --region ap-southeast-2 | docker login --username AWS --password-stdin 727861035172.dkr.ecr.ap-southeast-2.amazonaws.com

# Tag image
docker tag react-nginx:latest 727861035172.dkr.ecr.ap-southeast-2.amazonaws.com/react-nginx:latest

# Push to ECr
docker push 727861035172.dkr.ecr.ap-southeast-2.amazonaws.com/react-nginx:latest