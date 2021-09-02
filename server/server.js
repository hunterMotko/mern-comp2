const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('./connection/db')
const treeRouter = require('./routes/treeRouter')
const port = process.env.PORT || 3003

// handle form data
app.use(bodyParser.urlencoded({ extended: true }))
// cross origin server/client
app.use('/api', cors())
// form json
app.use(bodyParser.json())

// check if server is working
app.get('/', (req, res) => {
  res.send('Hello Hunter')
})

// make api route
app.use('/api', treeRouter)

if(require.main === module) {
  app.listen(port, () => {
    console.log( `Express started on http://localhost:${port}` +
      '; press Ctrl-C to terminate.' )
  })
} else {
  module.exports = app
}
