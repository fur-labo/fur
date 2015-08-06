#!/bin/bash

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/.." && pwd)
DEST_DIR="${BASE_DIR}/docs/assets/fonts"

cd ${BASE_DIR}

mkdir -p ${DEST_DIR}

bash ./ci/doc/doc_readme.sh
node ./ci/doc/doc_apiguide.js