import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();
// pre exporting the context usecontext for easy accesbility
export const useDataContext = () => useContext(DataContext);
const api = "https://660afd20ccda4cbc75dc3657.mockapi.io/library";
export const DataProvider = ({ children }) => {
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);
  // Fetching Data From the Api
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
  //Function to add author to Api
  const addAuthor = async (newAuthor) => {
    try {
      const response = await axios.post(`${api}/authors`, newAuthor);
      setAuthors([...authors, response.data]);
    } catch (error) {
      console.error("Error adding author:", error);
    }
  };
  //Function to edit author details in Api
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
  //Function to delete author in Api
  const deleteAuthor = async (authorId) => {
    try {
      await axios.delete(`${api}/authors/${authorId}`);
      setAuthors(authors.filter((author) => author.id !== authorId));
    } catch (error) {
      console.error("Error deleting author:", error);
    }
  };
  //Function to add book to Api
  const addBook = async (newBook) => {
    try {
      const response = await axios.post(`${api}/books`, newBook);
      setBooks([...books, response.data]);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };
  //Function to edit book in Api
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
  //Function to delete book in Api
  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`${api}/books/${bookId}`);
      setBooks(books.filter((book) => book.id !== bookId));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    // exporting states and functions for usage in components
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
