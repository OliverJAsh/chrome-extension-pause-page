#!/bin/bash

echo "Bump version in manifest"
read

rm -rf upload upload.zip
mkdir upload

cp -f manifest.json background.js icon.png upload

pushd upload
    zip -r upload.zip .
    mv upload.zip ..
popd
