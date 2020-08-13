const express = require("express");
const { connect } = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const { PORT, MONGODB_URL } = require("./Config");

const app = express();

/*============================middleware block==============*/
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

/*=========================load Routes=================*/
app.use("api/", require("./Routes/posts"));
/*============================DATABASE CONNECTINS=================*/
let staertApp = async() => {
    try {
        await connect(
            MONGODB_URL, {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: true,
            },
            (err) => {
                if (err) throw err;
                console.log("DATABASE CONNECTED");
            });
        //listen port
        app.listen(PORT, (err) => {
            if (err) throw err;
            console.log("SERVER LISTENING ON PORT" + PORT);
        });
    } catch (err) {
        if (err) throw err;
    }
};
staertApp();