import React, { useState } from 'react'
import { BookList } from './BookList'

export const Book = () => {

    const [book,setBook] = useState([

        { id: 1, name: "Merchant of veince" ,price : 2500},
        { id: 2, name: "Dark Night" ,price : 3140},
        { id: 3, name: "Morning Thought", price : 4030},
        { id: 4, name: "Olive in the forest", price : 5100 }
    ])

    const deleteBook = (id)=>{

        const newBook = book.filter((book)=>{
            return book.id!=id
        })
        setBook(newBook)
    }
  return (
    <div style={{textAlign : "center"}}>
        <h1>Book</h1>
        <BookList book = {book} deleteBook = {deleteBook}></BookList>
    </div>
  )
}