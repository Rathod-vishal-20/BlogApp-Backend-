const mongoose = require("mongoose")

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("DB connected successfully"))
    .catch( (error) => {
        console.log("DB Facing connection error");
        console.log(error)
        process.exit(1)
    })
}
module.exports = connectWithDb;