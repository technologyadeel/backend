const app = require('./app')


const port = process.env.PORT || 6000

app.get('/' , (req, res) => {
    res.send("hello")
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})