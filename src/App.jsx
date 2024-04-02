import React from "react";
import { DataProvider } from "./DataContext";
import Form from "./Form";
import AuthorsTable from "./AuthorsTable";
import BookTable from "./BookTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Library from "./Library";
import Navbar from "./components/Navbar";
import "./App.css";
// creating navigatable in browser router
const App = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/authors" element={<AuthorsTable />} />
          <Route path="/books" element={<BookTable />} />
          <Route path="/author/create" element={<Form type="author" />} />
          <Route path="/book/create" element={<Form type="book" />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
