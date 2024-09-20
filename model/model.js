const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    publishedDate:{
        type:String,
    },
    genres:{
        type: [String]
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Author"
    },
})

const authorShema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    year:{
        type: Number,
        require:true
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
        }
    ]
})

let Book = mongoose.model("Book", bookSchema)
let Author = mongoose.model("Author", authorShema)

module.exports = { Book, Author }