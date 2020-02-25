import React, { useState, useMemo } from "react";
import axios from "axios";

function Books(props) {
  const [data, setData] = useState([]);
  let id = props.match.params.id;

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/books/" + id, {
        headers: {
          Authorization: window.sessionStorage.getItem("token")
        }
      });
      setData([result.data.book]);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);

  let no = 1;

  return (
    <React.Fragment>
      <a href="/" className="btn btn-primary mb-5">
        Kembali
      </a>
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
    </React.Fragment>
  );
}

export default Books;
