FROM ubuntu:20.04
COPY init.sh /home/
COPY .bash_profile /root/
RUN chmod +x /home/init.sh && \
    apt-get update && \
    apt-get install -y curl git g++ make automake gcc && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash && \
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    nvm install 10.13.0 && \
    nvm use 10.13.0 && \
    npm install -g nrm yarn && \
    cd /home && \
    git clone https://github.com/pomelott/webpack4-cli.git && \
    cd /home/webpack4-cli && \
    mkdir dist && \
    yarn install
COPY cli-config.js /home/webpack4-cli/
COPY output.js /home/webpack4-cli/config/dev/
EXPOSE 9999
CMD ["/bin/bash", "-c", "/home/init.sh"]
