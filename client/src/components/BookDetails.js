import React from 'react'
import {graphql} from 'react-apollo';
import {getBookQuery} from '../queries/queries';

function BookDetails(props) {

    function displayBookDetails(props){
        const {book} = props.data;
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    {book.author.name ? <p>{book.author.name}</p> : null}
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {book.author.books.map(item=>{
                            return <li key={item.id}>{item.name}</li>
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>No book selected...</div>
            )
        }
    }

    console.log(props);
    return (
        <div id="book-details">
            {displayBookDetails(props)}
        </div>
    );
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);
