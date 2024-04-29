import express from "express";
const app = express();

const jokes = [
    {
        id: "1",
        title: "Joke 1",
        content: "This is a first joke"
    },
    {
        id: "2",
        title: "Joke 2",
        content: "This is a second joke"
    },
    {
        id: "3",
        title: "Joke 3",
        content: "This is a third joke"
    },
]

app.get('/', (req, res) => {
    res.send("Home")
})

app.get('/api/jokes', (req, res) => {
    res.send(jokes)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})