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
    <form onSubmit={formik.handleSubmit}>
      {type === "author" && (
        <>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Name"
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
          />
          {formik.touched.publishedDate && formik.errors.publishedDate ? (
            <div>{formik.errors.publishedDate}</div>
          ) : null}
        </>
      )}
      <button type="submit">
        {initialData
          ? "Update"
          : `Add ${type.charAt(0).toUpperCase() + type.slice(1)}`}
      </button>
    </form>
  );
};

export default Form;
