#!/bin/bash

yarn build

docker build -t react-nginx .