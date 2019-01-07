const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`Environment variable is: ${process.env.MY_AWESOME_VARIABLE}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))