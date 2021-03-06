const express = require('express')
const app = express()
const port = 3000
const low = require('lowdb')
const shortid = require('shortid');

const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] }).write()

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send('Hello World!<a href="/users">User List </a>')
})

app.get('/users', (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    })
})


app.get('/pug', function (req, res) {
    res.render('index', { title: 'Hey LAM', message: 'Hello there!' })
})

//les 3 GET INPUT FORM
//http://localhost:3000/users/search
//{}

// http://localhost:3000/users/search?q=th&age=10
// {
//     "q": "th",
//     "age": "10"
// }

app.get('/users/search', function (req, res) {
    // res.send(req.query)
    let q = req.query.q;
    let users = db.get('users').value();
    let matchedUsers = users.filter((user) => {
        return user.name.indexOf(q) !== -1;
    })

    res.render('users/index', {
        users: matchedUsers
    })
})

//les 4 post 

app.get('/users/create', (req, res) => {
    res.render('users/create')
})

app.post('/users/create', (req, res) => {
    //save to array users
    console.log(req.body);
    //add id to req.body ( user )
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write()
    //res.render('users/create')

    res.redirect('/users')
})

//les 6 - low db

// les 7 - view user - shortid - route params ( string ) parseInt
//route params
app.get('/users/:id', (req, res) => {

    let id = req.params.id
    // console.log(typeof (id)) //string -> parseInt -> int

    let user = db.get('users').find({ id: id }).value()

    res.render('users/view', {
        user: user
    })


})


//les 8 - express route - chia nho code



//callback to no when server start
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


