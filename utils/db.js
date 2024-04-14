const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://asim:mardan8110@cluster0.btwlh.mongodb.net/senseisuave?retryWrites=true&w=majority'; // Replace 'myDb' with your actual database name


mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
