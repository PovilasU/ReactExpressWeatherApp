import {Schema, model} from 'mongoose'

let LanguageSchema = new Schema({
    language: String
})

export default model("language", LanguageSchema)