#!/bin/bash

root=`dirname $0`
echo ">>> Path: $root"
cd $root || exit 1
version=`cat qooxdoo/version.txt`

echo ">>> Version: $version"
echo ">>> If there is an error tagging the project you might to increment the version counter"

echo ">>> Tagging qooxdoo $version"
git tag -a -m "Tagged qooxdoo $version" $version || exit 1

echo ">>> Pushing tag $version..."
git push origin $version || exit 1

echo ">>> Sleeping for 30 seconds"
sleep 30

echo ">>> Preparing release..."
mkdir -p ../qts-release/qooxdoo-$version || exit 1
cd ../qts-release/qooxdoo-$version || exit 1

echo ">>> Downloading archive qooxdoo-$version.zip..."
wget --no-check-certificate -O qooxdoo-$version.zip https://github.com/unify/qooxdoo/zipball/$version || exit 1

echo ">>> Tagging qooxdoo $version in SVN..."
cd .. || exit 1
svn add qooxdoo-$version
svn ci -m "Tagged qooxdoo $version" qooxdoo-$version || exit 1

echo ">>> Done"
