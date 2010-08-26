#!/bin/bash

echo ">>> Building API Viewer..."
cd ../qooxdoo/qooxdoo/framework
./generate.py api > /dev/null || exit 1
cd ~-
echo ">>> Syncing API Viewer..."
rsync -r --delete ../qooxdoo/qooxdoo/framework/api .


echo ">>> Building Test Runner..."
cd ../qooxdoo/qooxdoo/framework
./generate.py test > /dev/null || exit 1
cd ~-
echo ">>> Syncing Test Runner..."
rsync -r --delete ../qooxdoo/qooxdoo/framework/test .
