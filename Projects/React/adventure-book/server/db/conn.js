
const mongoose = require('mongoose')

const DB = "mongodb+srv://sandeshb887:Pass1234@cluster1.hcdhtbt.mongodb.net/ImgUpload?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('DB connected')).catch((err) => console.log('error' + err.message))