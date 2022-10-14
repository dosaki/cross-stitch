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
mkdir -p ./build
mkdir -p ./dist

# Build
./node_modules/webpack/bin/webpack.js --mode=production
cp -r ./icons ./build/
cp ./src/manifest.json ./build/
cp ./src/popup.* ./build/

# Zip for distribution
cd ./build || exit 1
zip -r ../dist/cross-stitcher.zip ./icons ./manifest.json ./main.js ./popup.*
cd .. || exit 1

echo "Done!"