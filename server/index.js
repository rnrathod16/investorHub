const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors({ credentials: true }))
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const route = require('./routes/route');
app.use(cookieParser());

dotenv.config({ path: './config.env' })

require('./db/dbconnect');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(route);

app.listen(PORT, () => {
    console.log("Server STarted");
})