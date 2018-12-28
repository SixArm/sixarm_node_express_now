'use strict'
const express = require('express')
const app = express()

// Config
const host = process.env.HOST
const port = process.env.PORT
const accessControlAllowOrigin = process.env.ACCESS_CONTROL_ALLOW_ORIGIN || `http://${host}:${port}`

// Relax security settings so we can reply with content to the client app.
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', accessControlAllowOrigin)
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
});

app.get('/', (req, res) => res.send((new Date()).toISOString()))

app.listen(port, () => console.log(`App listen port ${port}`))
