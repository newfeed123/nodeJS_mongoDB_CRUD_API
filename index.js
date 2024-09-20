const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")

var bodyParser = require("body-parser")

const morgan = require("morgan")
const dotenv = require("dotenv")
const authorRoute = require("./routes/author")
const bookRoute = require("./routes/book")

dotenv.config()

app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))

app.listen(8000, () => {
    console.log("Server is running ....");
    
})

// app.get("/api", (req, res) => {
//     res.status(200).json("Hello")
// })

app.use("/v1/author", authorRoute)
app.use("/v1/book", bookRoute)

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://huytran:1234@cluster0.c6pwz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}

connectDB();


