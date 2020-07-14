FROM pomelott/nvm-node:latest
COPY init.sh /home/
RUN chmod +x /home/init.sh && \
    apt-get update && \
    apt-get install -y git yarn && \
    cd /home && \
    git clone https://github.com/pomelott/webpack-multipage-cli.git && \
    cd webpack-multipage-cli && \
    yarn install
CMD ["node"]
