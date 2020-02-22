import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

function DeleteBook(props) {
  const id = props.match.params.id;
  const fetchData = async () => {
    await axios.delete("http://localhost:4000/books/" + id);
  };
  try {
    fetchData();
  } catch (err) {
    alert(err);
  }

  return (
    <div>
      <div>Success</div>
    </div>
  );
}

export default DeleteBook;
