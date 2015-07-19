#!/bin/bash

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/.." && pwd)
DEST_DIR="${BASE_DIR}/docs/assets/fonts"

cd ${BASE_DIR}

mkdir -p ${DEST_DIR}

while read -r src; do
    dest="${DEST_DIR}/$(basename "${src}")"
    cp "${src}" "${dest}"
    echo "File generated: ${dest}"
done <<< "$(find third_party -name "*.ttf" -or -name "*.svg" -or -name "*.eot")"


bash ./ci/render.sh