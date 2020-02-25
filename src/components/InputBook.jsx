import React, { useState } from "react";
import axios from "axios";

function InputBook() {
  const [form, setValues] = useState({
    title: "",
    author: "",
    language: "",
    pages: "",
    published_date: "",
    publisher_id: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:4000/books", {
        title: form.title,
        author: form.author,
        language: form.language,
        pages: form.pages,
        published_date: form.published_date,
        publisher_id: form.publisher_id
      });
      if (result.status === 201) {
        alert("Data inserted sucessfuly!");
      } else {
        throw new Error("Failed to insert data!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>Adding new book</h1>
      <form onSubmit={handleSubmit}>
        <label for="title">Title :</label>
        <input
          id="title"
          value={form.title}
          className="form-control"
          type="text"
          name="title"
          onChange={updateField}
        />

        <label for="author">Author :</label>
        <input
          id="author"
          value={form.author}
          className="form-control"
          type="text"
          name="author"
          onChange={updateField}
        />

        <label for="language">Language :</label>
        <input
          id="language"
          value={form.language}
          className="form-control"
          type="text"
          name="language"
          onChange={updateField}
        />

        <label for="pages">Pages :</label>
        <input
          id="pages"
          value={form.pages}
          className="form-control"
          type="number"
          name="pages"
          onChange={updateField}
        />

        <label for="published_date">Published date :</label>
        <input
          id="published_date"
          value={form.published_date}
          className="form-control"
          type="date"
          name="published_date"
          onChange={updateField}
        />

        <label for="publisher_id">Publisher Id :</label>
        <input
          id="publisher_id"
          value={form.publisher_id}
          className="form-control"
          type="text"
          name="publisher_id"
          onChange={updateField}
        />

        <input type="submit" className="btn btn-primary mt-3" />
      </form>
    </div>
  );
}

export default InputBook;
