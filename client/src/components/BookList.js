import React, {useState} from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries';

// components
import BookDetails from './BookDetails';


function BookList(props) {

    const [selectedBook, setSelectedBook] = useState('');

    function displayBooks(props) {
        let data = props.data;
        if (data.loading) {
            return (<div>Loading books...</div>)
        } else {
            return data.books.map(book=>
                <li key={book.id} onClick={e=>{setSelectedBook(book.id)}}>{book.name}</li>
            )
        }
    }

    return (
        <div>
            <ul id="book-list">
                {displayBooks(props)}
            </ul>
            <BookDetails bookId={selectedBook}/>
        </div>
    );
}

export default graphql(getBooksQuery)(BookList);
