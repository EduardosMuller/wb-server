const app = require('connect')()
const serveStatic = require('serve-static')
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true
}

app.use(cors(corsOptions));

// Serve up mock-api folder
app.use('/api', serveStatic('mock-api', {
  'index': false,
  'setHeaders': setJsonHeaders
}))

 
// Set header to force download
function setJsonHeaders (res, path) {
  res.setHeader('Content-type', 'application/json')
}

// Serve up public folder
app.use('/', serveStatic('public', {'index': ['index.html', 'index.htm']}))

app.listen(8888, () => {
    console.log('Acesse: http://localhost:8888')
});