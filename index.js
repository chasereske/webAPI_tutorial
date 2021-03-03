const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://chase123:IamInnovation33!!@cluster0.jxwul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.log(`Could not connect to MongoDB. ERROR: ${err}`));