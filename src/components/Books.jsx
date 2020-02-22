import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

function Books(props) {
  const [data, setData] = useState([]);
  let id = props.match.params.id;

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:4000/books/" + id);
      setData([result.data]);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);

  let no = 1;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <td>No.</td>
          <td>Title</td>
          <td>Author</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item, id) => (
          <tr key={id}>
            <td>{no++}</td>
            <td>
              <a>{item.title}</a>
            </td>
            <td>{item.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Books;
