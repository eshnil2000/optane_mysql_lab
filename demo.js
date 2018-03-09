var adventureTime = require('./')

adventureTime({
  guide: "http://ec2-34-215-1-92.us-west-2.compute.amazonaws.com/guide/index.html",
  server: "ec2-34-215-1-92.us-west-2.compute.amazonaws.com:443",
  id: Math.random().toString(36).slice(2)
})
