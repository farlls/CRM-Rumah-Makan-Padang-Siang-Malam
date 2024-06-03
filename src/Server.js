const express = require('express')
const cors = require('cors')
const loginRoutes = require('./RouteDb') // Make sure the path is correct

const app = express()

app.use(cors())
app.use(express.json()) // Use express.json() instead of body-parser
app.use('/api', loginRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
