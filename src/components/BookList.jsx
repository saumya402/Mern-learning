import React from 'react'

export const BookList = (props) => {

    return (
        <div>
        {
            // props.book.length == 0 ? <h1 style={{ textAlign: "center" }}>No Data Found</h1>
        
            <table class="table table-dark">

                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>PRICE</td>
                        <td>ACTION</td>
                    </tr>
                </thead>

                <tbody>

                    {
                        props.book.map((b) => {

                            return (
                                <tr>
                                    <td>{b.id}</td>
                                    <td>{b.name}</td>
                                    <td>{b.price}</td>
                                    <td>
                                        <button
                                            onClick={() => {props.deleteBook(b.id)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>
}
        </div>
    )
}