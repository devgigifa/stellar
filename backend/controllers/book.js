const { getAllBooks, getBooksID, insertBook, modifyBooks, deleteBookID } = require("../services/book")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function getBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const book = getBooksID(id)
            res.send(book)
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postBook(req, res) {
    try {
        const newBook = req.body
        if(req.body.name) {
            insertBook(newBook)
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório")
        }
        
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body
            modifyBooks(body, id)
            res.send("Item modificado com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido")
        }
       
    } catch(error) {
        res.status(500)
        res.send(error.message) 
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deleteBookID(id)
            res.send("livro deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}