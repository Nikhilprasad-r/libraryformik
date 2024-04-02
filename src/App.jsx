import React from "react";
import { DataProvider } from "./DataContext";
import Form from "./Form";
import AuthorsTable from "./AuthorsTable";
import BookTable from "./BookTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Library from "./Library";

const App = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/authors" element={<AuthorsTable />} />
          <Route path="/book" element={<BookTable />} />
          <Route path="/authors/create" element={<Form type="author" />} />
          <Route path="/book/create" element={<Form type="book" />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
