const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

///PORT
const PORT = process.env.PORT || 3000;

///ENV
require('dotenv/config');

///pasport config
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// //express session
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}))

//connect flash
app.use(flash());

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//THIS IS FOR BODY PARSER
app.use(bodyParser.json());

///// ROUTES
const signup = require('./routes/auth/signup');
app.use('/signup', signup);

const login = require('./routes/auth/login');
app.use('/login', login);

const userRoutes = require('./routes/users/users');
app.use('/users', userRoutes);

const jobsRoutes = require('./routes/jobs/jobs');
app.use('/jobs', jobsRoutes);

const sitterProfiles = require('./routes/profiles/sitter');
app.use('/sitter', sitterProfiles);

const companyProfiles = require('./routes/agencies/admin');
app.use('/agency', companyProfiles);


///middlewares - function that executes when we hit a route



///connect to database
mongoose.connect( process.env.DB_CONNECT, 
    { useNewUrlParser: true},
    () => 
    console.log("connected to DB")
);


///404 error page

app.use((req, res, next) => {
    res.status(404).send("page not found")
})


///listen to the server
app.listen(PORT), console.log(`Server started on ${PORT}`);