import express from 'express'
import path from 'path'
import { router } from './routers/app.router';

export const app = express();

app.use('/assets', express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({ extended: true }))

app.set('view engine','pug');
app.set('views', path.join(__dirname, './views'))

app.use(router)
