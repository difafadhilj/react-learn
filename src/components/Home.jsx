import React, { useState, useMemo } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:4000/books");
      setData(result.data);
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
          <td>Operation</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item, id) => (
          <tr key={id}>
            <td>
              <a href={"http://localhost:3000/books/" + item._id}>{no++}</a>
            </td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>
              <a href={"http://localhost:3000/EditBook/" + item._id}>
                <button className="btn btn-success">Edit</button>
              </a>

              <a href={"http://localhost:3000/DeleteBook/" + item._id}>
                <button className="btn btn-danger">Delete</button>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Home;
