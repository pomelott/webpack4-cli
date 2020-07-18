# !/bin/bash
source ~/.bash_profile
cd /home/webpack-multipage-cli
git checkout -- src/**
git checkout -- page/**
if [[ $WEBPACK_MODE != '' ]]; then
        echo "WEBPACK_MODE: $WEBPACK_MODE"
fi

if [[ $WEBPACK_MODE == 'dev' ]]; then
        echo "running in develop mode"
        npm run dev
elif [[ $WEBPACK_MODE == 'build' ]]; then
        echo "running in build mode"
        npm run build
else
        echo "empty mode, may be do a volume-mount ..."
fi
