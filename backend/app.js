const express = require("express")
const routerBook = require("./routes/book")
const routerFavorite = require("./routes/favorite")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/books', routerBook)
app.use('/favorites', routerFavorite)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})