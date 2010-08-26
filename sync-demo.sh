#!/bin/bash

mkdir -p demo

echo ">>> Building Demo Browser..."
cd ../qooxdoo/qooxdoo/application/demobrowser
./generate.py build > /dev/null || exit 1
cd ~-
echo ">>> Syncing Demo Browser..."
rsync -r --delete ../qooxdoo/qooxdoo/application/demobrowser/build/* demo/
