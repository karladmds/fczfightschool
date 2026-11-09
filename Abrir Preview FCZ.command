#!/bin/zsh

# Abra este arquivo com dois cliques para iniciar a prévia local da FCZ.
PROJECT_DIR="/Users/karla/Documents/Codex/2026-09-24/quero-desenvolver-um-site-institucional-para"
NODE_DIR="/Users/karla/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin"

cd "$PROJECT_DIR" || exit 1
export PATH="$NODE_DIR:$PATH"

echo "Iniciando a prévia da FCZ Fight School..."
./node_modules/.bin/vite --host 127.0.0.1 --port 5173 &
PREVIEW_PID=$!

sleep 2
open "http://127.0.0.1:5173"

echo "A prévia foi aberta no navegador. Mantenha esta janela aberta enquanto estiver usando o site."
wait "$PREVIEW_PID"
