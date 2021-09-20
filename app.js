const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const posts = require('./routes/api/posts');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
    console.log(res);
    res.send('Hello Long2');
});

app.use("/api/posts", posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));