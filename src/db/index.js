const { connect } = require("mongoose")

const uri = "mongodb://localhost:27017/brillio-db"

connect(uri)
.then(() => console.log("MongoDB Connected!!!"))
.catch((err) => console.log(err))