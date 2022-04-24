const { connect } = require("mongoose")

const uri = "mongodb+srv://alice:98pHr4pgn7pe6BEJ@cluster0.j90zy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

connect(uri)
.then(() => console.log("MongoDB Connected!!!"))
.catch((err) => console.log(err))