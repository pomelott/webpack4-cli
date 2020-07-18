# !/bin/bash
source ~/.bash_profile
cd /home/webpack-multipage-cli
git checkout -- src/**
git checkout -- page/**
echo "WEBPACK_MODE: $WEBPACK_MODE"
if [ $WEBPACK_MODE = 'dev' ]; then
        echo "running in develop mode"
        npm run dev
else
        echo "running in build mode"
        npm run build
fi
