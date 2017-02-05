const stylelintConfig = require('./stylelintConfig');

module.exports = {
  plugins: [
    require('stylelint')(stylelintConfig)
  ]
}
