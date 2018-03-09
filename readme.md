# adventure-time

a web UI to connect to docker-browser-ser

## examples

here are some projects based on this

- http://ec2-34-215-1-92.us-west-2.compute.amazonaws.com/

###Prerequisites
- Server setup with Ubuntu 16.04
- Ports opened (80, 443, 8080)

### run the demo

- install docker (docker for linux, boot2docker for mac/windows)
- install and run https://github.com/mafintosh/docker-browser-server
- install and run this repo

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
