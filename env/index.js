
switch (process.env.NODE_ENV) {
  case 'development':
    module.exports = require('./dev')
    break
  case 'production':
    module.exports = require('./prod')
    break
  case 'test':
    module.exports = require('./test')
    break
  default:
    module.exports = require('./dev')
}
