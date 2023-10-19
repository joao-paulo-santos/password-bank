const express = require('express')
const app = express()
const port = 3000

// serve up production assets
app.use(express.static('client/build'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const path = require('path');

app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})