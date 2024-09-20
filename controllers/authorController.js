const {Author, Book} = require("../model/model")

const authorController = {
    //ADD AUTHOR
    addAuthor: async(req, res) => {
        // res.status(200).json(req.body)
        try{
            const newAuthor = new Author(req.body)
            const savedAuthor = await newAuthor.save()
            res.status(200).json(savedAuthor)
        }catch(err){
            res.status(500).json(err)
        }
    },

    //GET ALL AUTHORS
    getAllAuthors: async(req, res) => {
        try {
            const authors = await Author.find()
            res.status(200).json(authors)
        } catch (error) {
            res.status(500).json(err)
        }
    },

    //GET AN AUTHOR
    getAnAuthor: async(req, res)=>{
        try {
            const author = await Author.findById(req.params.id).populate("books")
            res.status(200).json(author)
        } catch (error) {
            res.status(500).json(err)
        }
    },

    //UPDATE AUTHOR
    updateAuthor: async(req, res)=>{
        try {
            const author = await Author.findById(req.params.id)
            await author.updateOne({  
                $set: req.body
            })
            res.status(200).json("Update successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = authorController