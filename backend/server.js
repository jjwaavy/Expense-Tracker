	const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

//Routes
const expensesRoutes = require('./routes/expensesRoutes')

const app = express();

// BodyParser Middleware
app.use(express.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
//YOP3lKyYuqIe0gSk

//Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log(error));

// User routes
app.use('/api/expenses', expensesRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));
