import { app } from './app'

const port = process.env.PORT || 8080;

app.listen(port)
  .on('listening', () => console.log(`--> listening port ${port}.`) )
  .on('request', (data) => console.log(`--> new ${data.method} request to ${data.url}` ) )
  .on('error', (err) => console.log(`--> ${err}`) )