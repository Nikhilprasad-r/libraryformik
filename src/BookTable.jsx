import React, { useState } from "react";
import { useDataContext } from "./DataContext";

const BookTable = () => {
  const { books, deleteBook, editBook } = useDataContext();
  const [editMode, setEditMode] = useState(null);
  const [editedBook, setEditedBook] = useState({});

  const handleEdit = (book) => {
    setEditMode(book.id);
    setEditedBook(book);
  };

  const handleUpdate = () => {
    editBook(editedBook);
    setEditMode(null);
    setEditedBook({});
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Author</th>
          <th>Title</th>
          <th>ISBN</th>
          <th>Published Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>
              {editMode === book.id ? (
                <input
                  value={editedBook.author}
                  onChange={(e) =>
                    setEditedBook({ ...editedBook, author: e.target.value })
                  }
                />
              ) : (
                book.author
              )}
            </td>
            <td>
              {editMode === book.id ? (
                <input
                  value={editedBook.title}
                  onChange={(e) =>
                    setEditedBook({ ...editedBook, title: e.target.value })
                  }
                />
              ) : (
                book.title
              )}
            </td>
            <td>
              {editMode === book.id ? (
                <input
                  value={editedBook.isbn}
                  onChange={(e) =>
                    setEditedBook({ ...editedBook, isbn: e.target.value })
                  }
                />
              ) : (
                book.isbn
              )}
            </td>
            <td>
              {editMode === book.id ? (
                <input
                  value={editedBook.publishedDate}
                  onChange={(e) =>
                    setEditedBook({
                      ...editedBook,
                      publishedDate: e.target.value,
                    })
                  }
                />
              ) : (
                book.publishedDate
              )}
            </td>
            <td>
              {editMode === book.id ? (
                <button onClick={handleUpdate}>Update</button>
              ) : (
                <button onClick={() => handleEdit(book)}>Edit</button>
              )}
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
