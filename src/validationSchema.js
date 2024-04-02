import * as Yup from "yup";

export const authorValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  bio: Yup.string().required("Bio is required"),
  birthDate: Yup.date().required("Birth Date is required"),
});

export const bookValidationSchema = Yup.object().shape({
  author: Yup.string().required("Author is required"),
  title: Yup.string().required("Title is required"),
  isbn: Yup.string().required("ISBN is required"),
  publishedDate: Yup.date().required("Published Date is required"),
});
