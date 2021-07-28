const mongoose = require('mongoose');

const dbURI = process.env.DB_URI;

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(dbURI,option).then(
    () => {
        console.log(`Database uri: ${dbURI} Connected`);
    }).catch(
    (err) => {
        console.log(err);
    }
);