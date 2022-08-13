const mongoose = require('mongoose');

const db = process.env.DATABASE
mongoose.connect(db).then(() => {
    console.log("Connected to Database");
}).catch((e) => {
    console.log(`Database Failed ${e}`);
})