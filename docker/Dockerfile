FROM pomelott/nvm-node:latest
RUN chmod +x /root/init.sh && \
    apt-get update && \
    apt-get install -y git && \
    cd /home && \
    git clone git@github.com:pomelott/webpack-multipage-cli.git && \
    cd webpack-multipage-cli && \
    yarn install
CMD ["node"]
