import React, { useState } from "react";
import { useDataContext } from "./DataContext";

const BookTable = () => {
  const { books, deleteBook, editBook } = useDataContext();
  const [editMode, setEditMode] = useState(null);
  const [editedBook, setEditedBook] = useState({});
  //handling edit mode
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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Author
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Title
            </th>
            <th scope="col" className="px-6 py-3  bg-gray-50 dark:bg-gray-800">
              ISBN
            </th>
            <th scope="col" className="px-6 py-3  bg-gray-50 dark:bg-gray-800">
              Published Date
            </th>
            <th scope="col" className="px-6 py-3  bg-gray-50 dark:bg-gray-800">
              Make changes
            </th>
            <th scope="col" className="px-6 py-3  bg-gray-50 dark:bg-gray-800">
              Delete Book
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr
              className="border-b border-gray-200 dark:border-gray-700"
              key={book.id}
            >
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {editMode === book.id ? (
                  <input
                    value={editedBook.author}
                    onChange={(e) =>
                      setEditedBook({ ...editedBook, author: e.target.value })
                    }
                    className="text-black"
                  />
                ) : (
                  book.author
                )}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                {editMode === book.id ? (
                  <input
                    value={editedBook.title}
                    onChange={(e) =>
                      setEditedBook({ ...editedBook, title: e.target.value })
                    }
                    className="text-black"
                  />
                ) : (
                  book.title
                )}
              </td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {editMode === book.id ? (
                  <input
                    value={editedBook.isbn}
                    onChange={(e) =>
                      setEditedBook({ ...editedBook, isbn: e.target.value })
                    }
                    className="text-black"
                  />
                ) : (
                  book.isbn
                )}
              </td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {editMode === book.id ? (
                  <input
                    value={editedBook.publishedDate}
                    onChange={(e) =>
                      setEditedBook({
                        ...editedBook,
                        publishedDate: e.target.value,
                      })
                    }
                    className="text-black"
                  />
                ) : (
                  book.publishedDate
                )}
              </td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {editMode === book.id ? (
                  <button
                    onClick={handleUpdate}
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(book)}
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Edit
                  </button>
                )}
              </td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                <button
                  onClick={() => deleteBook(book.id)}
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
