#!/usr/bin/env bash
set -euo pipefail

SERVER="rick@192.168.86.30"
DEST="/home/rick/docker/rickimai-site"

# ensure dest exists
ssh "$SERVER" "mkdir -p $DEST"

# sync project to server
rsync -az --delete --delete-excluded \
  --exclude node_modules --exclude .next --exclude dist --exclude .git \
  ./ "$SERVER:$DEST/"

# build + run (host 3100 -> container 3000)
ssh "$SERVER" "
  cd $DEST &&
  docker build -t rickimai-site:latest . &&
  docker rm -f rickimai-site >/dev/null 2>&1 || true &&
  docker run -d --restart unless-stopped --name rickimai-site -p 3100:3000 rickimai-site:latest
"

# quick check
ssh "$SERVER" "curl -I http://localhost:3100 | head -n 5"
