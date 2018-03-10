# It's Optane time

a web UI to connect to docker-browser-server

#Based on code from https://github.com/maxogden/adventure-time & https://github.com/eshnil2000/docker-browser-server

## examples

here are some projects based on this
#This is an instance on AWS
- http://ec2-34-215-1-92.us-west-2.compute.amazonaws.com/
#This is an instance on Packet
- http://147.75.88.22:443

###Prerequisites
- Server setup with Ubuntu 16.04
- Ports opened (80, 443, 8080): NOTE: Port 443 is preferred, other ports seemed unstable with websockets

- Apache2 web server installed and running
- Node, npm, browserify are installed

#### Setup script example
```
sudo apt-get update --assume-yes

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt-get update --assume-yes

sudo apt-get install docker-ce --assume-yes

sudo apt-get install nodejs-legacy --assume-yes

sudo apt-get install npm --assume-yes

sudo npm install -g browserify

sudo npm install #run this in /var/www/html to install dependencies

##Create a basic dockerfile which:
#1. Starts from Ubuntu container with exposed filesystem
#2. Adds a welcome message 
#3. sets the working directory as /root
#4. Shows the welcome message, then launches a bash shell/ prompt, which is forwarded via web socket to the browser

### Create Dockerfile, save as "Dockerfile"
FROM maxogden/docker-adventure-time
ADD welcome.txt /root
WORKDIR /root
ENTRYPOINT cat welcome.txt && /bin/bash
#####

docker build -t optane . #this sets up container

npm install -g docker-browser-server

sudo apt-get install apache2

###Modify demo.js 
var adventureTime = require('./')

adventureTime({
  guide: "http://ec2-34-215-1-92.us-west-2.compute.amazonaws.com/guide/index.html
  server: "ec2-34-215-1-92.us-west-2.compute.amazonaws.com:800",
  id: Math.random().toString(36).slice(2)
})
###

browserify demo.js -o demo-bundle.js # this sets up node modules to run in browser
browserify demo-terminal.js -o demo-terminal-bundle.js

```

### run the demo

- install docker (docker for linux, boot2docker for mac/windows)
- install and run https://github.com/mafintosh/docker-browser-server
- install and run this repo, preferably save this under /var/www/html with Apache2

### example

use with browserify

```JS
var adventureTime = require('adventure-time')

adventureTime({
  guide: "http://ec2-34-215-1-92.us-west-2.compute.amazonaws.com/guide",
  server: "http://ec2-34-215-1-92.us-west-2.compute.amazonaws.com/:8080",
  id: Math.random().toString(36).slice(2)
})
```

see `demo.js`, `demo-terminal.js`, `index.html` and `terminal.html` for more details.
