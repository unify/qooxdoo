#!/bin/bash

root=`dirname $0`
echo ">>> Path: $root"

cd $root || exit 1
version=`cat qooxdoo/version.txt`
echo ">>> Tagging qooxdoo $version"
git tag -a -m "Tagged qooxdoo $version" $version || exit 1

echo ">>> Pushing tag $version..."
git push origin $version || exit 1

echo ">>> Sleeping for 30 seconds"
sleep 30

echo ">>> Preparing release..."
mkdir ../qts-release/qooxdoo-$version || exit 1
cd ../qts-release/qooxdoo-$version || exit 1

echo ">>> Downloading archive qooxdoo-$version.zip..."
wget -O qooxdoo-$version.zip http://github.com/unify/qooxdoo/zipball/$version || exit 1

echo ">>> Tagging qooxdoo $version in SVN..."
cd .. || exit 1
svn add qooxdoo-$version
svn ci -m "Tagged qooxdoo $version" || exit 1

echo ">>> Done"
