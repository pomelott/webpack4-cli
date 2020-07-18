FROM ubuntu:20.04
COPY init.sh /home/
COPY .bash_profile /root/
RUN chmod +x /home/init.sh && \
    apt-get update && \
    apt-get install -y curl git && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash && \
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    nvm install 10.13.0 && \
    nvm use 10.13.0 && \
    npm install -g nrm yarn && \
    nrm use taobao && \
    cd /home && \
    git clone https://github.com/pomelott/webpack-multipage-cli.git && \
    cd /home/webpack-multipage-cli && \
    mkdir dist && \
    yarn install && \
    yarn add jpegtran-bin
COPY cli-config.js /home/webpack-multipage-cli/
COPY output.js /home/webpack-multipage-cli/config/dev/
EXPOSE 9999
CMD ["/bin/bash", "-c", "/home/init.sh"]
