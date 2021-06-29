const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/blog';

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(dbURI,option).then(
    () => console.log(`Database uri: ${dbURI} Connected`)).catch(
    (err) => console.log(err)
);