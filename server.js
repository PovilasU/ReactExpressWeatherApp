/*
    terminal commands
        [program] [options/flags] [arguments]
        node        --watch         server.js
*/
console.log('hi')
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import LanguageModel from './models/LanguageModel.js'

dotenv.config()
mongoose.connect(process.env.MONGOURI)

import express from 'express'
const app = express();

app.use(express.static('dist'))
app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})

app.get('/api/lang/:lang', async (req, res) => {
    let { lang } = req.params
    let language = await LanguageModel.findOne({ language: lang })
    if (language) {
        res.json(language)
    } else {
        res.status(404).send("Not found")
    }
})
app.listen(8888, () => { console.log("express app123"); })