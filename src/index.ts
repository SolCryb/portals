import server from './server'

const port = process.env.PORT || 5000
server.listen(port, () => console.log(require('fs').readFileSync('logo.txt', 'utf8').replace(':PORT', `:${port}`)))
