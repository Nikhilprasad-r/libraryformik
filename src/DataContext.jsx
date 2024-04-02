import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);
const api = "https://660afd20ccda4cbc75dc3657.mockapi.io/library";
export const DataProvider = ({ children }) => {
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}/authors`)
      .then((response) => setAuthors(response.data))
      .catch((error) => console.error("Error fetching authors:", error));
    axios
      .get(`${api}/books`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const addAuthor = async (newAuthor) => {
    try {
      const response = await axios.post(`${api}/authors`, newAuthor);
      setAuthors([...authors, response.data]);
    } catch (error) {
      console.error("Error adding author:", error);
    }
  };

  const editAuthor = async (updatedAuthor) => {
    try {
      await axios.put(`${api}/authors/${updatedAuthor.id}`, updatedAuthor);
      setAuthors(
        authors.map((author) =>
          author.id === updatedAuthor.id ? updatedAuthor : author
        )
      );
    } catch (error) {
      console.error("Error editing author:", error);
    }
  };

  const deleteAuthor = async (authorId) => {
    try {
      await axios.delete(`${api}/authors/${authorId}`);
      setAuthors(authors.filter((author) => author.id !== authorId));
    } catch (error) {
      console.error("Error deleting author:", error);
    }
  };

  const addBook = async (newBook) => {
    try {
      const response = await axios.post(`${api}/books`, newBook);
      setBooks([...books, response.data]);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const editBook = async (updatedBook) => {
    try {
      await axios.put(`${api}/books/${updatedBook.id}`, updatedBook);
      setBooks(
        books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
      );
    } catch (error) {
      console.error("Error editing book:", error);
    }
  };

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`${api}/books/${bookId}`);
      setBooks(books.filter((book) => book.id !== bookId));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        authors,
        books,
        addAuthor,
        editAuthor,
        deleteAuthor,
        addBook,
        editBook,
        deleteBook,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
