import React from "react";
import { useFormik } from "formik";
import { useDataContext } from "./DataContext";
import {
  authorValidationSchema,
  bookValidationSchema,
} from "./validationSchema";

const Form = ({ type, initialData }) => {
  const { addAuthor, editAuthor, addBook, editBook } = useDataContext();

  const validationSchema =
    type === "author" ? authorValidationSchema : bookValidationSchema;

  const initialValues = {
    name: "",
    bio: "",
    birthDate: "",
    title: "",
    isbn: "",
    publishedDate: "",
    ...initialData, // Merge with initial data if available for editing
  };

  const onSubmit = (values, { resetForm }) => {
    if (type === "author") {
      if (initialData) {
        editAuthor(values);
      } else {
        addAuthor(values);
      }
    } else {
      if (initialData) {
        editBook(values);
      } else {
        addBook(values);
      }
    }
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema, // Pass the validation schema
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto mt-20">
      {type === "author" && (
        <>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Name"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
          <input
            type="text"
            name="bio"
            value={formik.values.bio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Bio"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          />
          {formik.touched.bio && formik.errors.bio ? (
            <div>{formik.errors.bio}</div>
          ) : null}
          <input
            type="date"
            name="birthDate"
            value={formik.values.birthDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Birth Date"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          />
          {formik.touched.birthDate && formik.errors.birthDate ? (
            <div>{formik.errors.birthDate}</div>
          ) : null}
        </>
      )}
      {type === "book" && (
        <>
          <input
            type="text"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Author"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          />
          {formik.touched.author && formik.errors.author ? (
            <div>{formik.errors.author}</div>
          ) : null}
          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Title"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
          <input
            type="text"
            name="isbn"
            value={formik.values.isbn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="ISBN"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          />
          {formik.touched.isbn && formik.errors.isbn ? (
            <div>{formik.errors.isbn}</div>
          ) : null}
          <input
            type="date"
            name="publishedDate"
            value={formik.values.publishedDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Published Date"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          />
          {formik.touched.publishedDate && formik.errors.publishedDate ? (
            <div>{formik.errors.publishedDate}</div>
          ) : null}
        </>
      )}
      <button
        type="submit"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        {initialData
          ? "Update"
          : `Add ${type.charAt(0).toUpperCase() + type.slice(1)}`}
      </button>
    </form>
  );
};

export default Form;
