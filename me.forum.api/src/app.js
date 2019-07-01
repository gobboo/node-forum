const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {sequelize} = require('./models')
const morgan = require('morgan')
const config = require('./config/config')

const app = express();

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

require('./passport')

require('./routes')(app)


sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log('API Server listening on port %s', process.env.PORT || 8081)
  })

