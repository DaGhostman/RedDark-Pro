const fs = require('fs')
const editor = require('./src/editor.json')
const syntax = require('./src/syntax')

fs.writeFileSync(
  './themes/RedPro-Dark.json',
  JSON.stringify(
    {
      ...editor['dark'],
      ...syntax['dark']
    },
    '',
    2
  )
)

fs.writeFileSync(
  './themes/RedPro-Light.json',
  JSON.stringify(
    {
      ...editor['light'],
      ...syntax['light']
    },
    '',
    2
  )
)
