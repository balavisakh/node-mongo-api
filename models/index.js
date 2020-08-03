//db connection
const mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/users",{ useNewUrlParser: true }, (error) => {
    if (!error) {
        console.log("db connected");
    }
    else {
        console.log("db connection failed");
    }
});
