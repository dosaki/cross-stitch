#!/bin/bash

SOURCE="${BASH_SOURCE[0]}"
while [[ -h "${SOURCE}" ]]; do # resolve ${SOURCE} until the file is no longer a symlink
    DIR="$( cd -P "$( dirname "${SOURCE}" )" && pwd )"
    SOURCE="$(readlink "${SOURCE}")"
    [[ ${SOURCE} != /* ]] && SOURCE="${DIR}/${SOURCE}" # if ${SOURCE} was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
CURRENT_DIR="$( cd -P "$( dirname "${SOURCE}" )" && pwd )"

cd "${CURRENT_DIR}" || exit 1

npm install

# Cleanup
rm -rf ./dist
rm -rf ./build
mkdir -p ./build/firefox
mkdir -p ./build/chrome
mkdir -p ./dist

# Build
./node_modules/webpack/bin/webpack.js --mode=production
cp -r ./icons ./build/firefox
cp ./src/popup.* ./build/firefox
cp ./src/manifest.json ./build/firefox
cp ./build/main.js ./build/firefox
cp ./build/main.js.map ./build/firefox

cp -r ./icons ./build/chrome
cp ./src/popup.* ./build/chrome
cp ./src/manifest.v3.json ./build/chrome/manifest.json
mv ./build/main.js ./build/chrome
mv ./build/main.js.map ./build/chrome

# Zip for distribution
cd ./build/firefox || exit 1
zip -r ../../dist/cross-stitcher.firefox.zip ./icons ./manifest.json ./main.js ./popup.*
cd ../chrome || exit 1
zip -r ../../dist/cross-stitcher.chrome.zip ./icons ./manifest.json ./main.js ./popup.*
cd ../.. || exit 1

echo "Done!"