import React from "react";
import axios from "axios";

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

  return <div></div>;
}

export default DeleteBook;
