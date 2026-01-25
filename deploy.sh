#!/usr/bin/env bash
set -euo pipefail

SERVER="rick@192.168.86.30"
DEST="/home/rick/docker/rickimai-site"

ssh "$SERVER" "mkdir -p $DEST"

rsync -az --delete --delete-excluded \
  --exclude node_modules --exclude .next --exclude dist --exclude .git \
  ./ "$SERVER:$DEST/"

ssh "$SERVER" "
  set -e
  cd $DEST
  docker build -t rickimai-site:latest .
  docker rm -f rickimai-site >/dev/null 2>&1 || true
  docker run -d --restart unless-stopped --name rickimai-site \
    --env-file $DEST/.env.production \
    -p 3100:3000 \
    rickimai-site:latest
  docker exec rickimai-site sh -lc 'echo RESEND_API_KEY=\${RESEND_API_KEY:-<empty>}'
"

ssh "$SERVER" "curl -sSI http://localhost:3100 | head -n 5"
