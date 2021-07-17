const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://Seniolis:frame2841@nodecluster.v19bt.mongodb.net/blogweb?retryWrites=true&w=majority';

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(dbURI,option).then(
    () => console.log(`Database uri: ${dbURI} Connected`)).catch(
    (err) => console.log(err)
);