/*
    terminal commands
        [program] [options/flags] [arguments]
        node        --watch         server.js
*/

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import express from 'express'
const app = express();

app.use(express.static('dist'))
app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})
app.listen(8888, () => { console.log("express app123"); })