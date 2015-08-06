#!/bin/bash

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/.." && pwd)

cd ${BASE_DIR}

echo "Sure to release new version (y/N)? "
read -p ">> " answer

case ${answer:0:1} in
    y|Y )
        npm run versionup
        npm run taggit
        npm publish .
        git add . -A
        git commit -m 'Version up'
        git push
    ;;
    * )
        echo aborted.
    ;;
esac