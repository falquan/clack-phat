docker build . -t falquan/clack-phat:develop
docker tag falquan/clack-phat:develop falquan/clack-phat:alpha
docker push falquan/clack-phat:develop

