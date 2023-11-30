#!/usr/bin/env bash

echo "cleaning"
npm run clean:all
echo "installing node_modules"
npm i
echo "building the project"
npm run build
