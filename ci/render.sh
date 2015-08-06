#!/bin/bash

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/.." && pwd)
DEST_DIR="${BASE_DIR}/docs/assets/fonts"

cd ${BASE_DIR}

npm run render -- "+(docs|lib|test)/**/.*.bud"
node ./ci/render/render_examples.js

bash ./ci/doc/doc_readme.sh