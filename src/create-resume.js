const pug = require('pug')
const path = require('path')
const fs = require('fs')

const resumeTemplate = path.join( __dirname, './views/resume-template.pug' )
const templateCompiler = pug.compileFile(resumeTemplate);

try {

  console.log('> Start resume creation')

  const resumeData = require('./data/resume-data.json')
  const htmlContent = templateCompiler( { data : resumeData } )
  
  fs.copyFileSync( path.join( __dirname, './assets/custom.css' ), path.join( __dirname, './tmp/custom.css' )  )
  fs.copyFileSync( path.join( __dirname, './assets/picture.jpg' ), path.join( __dirname, './tmp/picture.jpg' )  )
  fs.writeFileSync( path.join( __dirname, './tmp/index.html' ), htmlContent )
  
  console.log('> Resume successfuly created')

} catch (error) {

  console.error(`> ERROR: ${error}\n`)
  process.exit()

}

console.log('> myresume-app v1.0.0\n')
