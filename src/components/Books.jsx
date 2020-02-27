import React, { useState, useMemo } from "react";
import axios from "axios";

function Books(props) {
  const [data, setData] = useState([]);
  const [books, setOrder] = useState([]);
  let id = props.match.params.id;

  const pinjam = async () => {
    try {
      const result = await axios.post(
        "http://localhost:8080/orders",
        { id },
        {
          headers: {
            Authorization: window.sessionStorage.getItem("token")
          }
        }
      );
      if (result.status === 201) {
        alert(result.data.status);
        setOrder([result.data.book]);
        window.location.assign("/getOrder");
      }
    } catch (err) {
      alert(err);
    }
  };

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
  if (window.sessionStorage.getItem("role") !== "USER")
    return <h1>Try to login as User</h1>;
  return (
    <React.Fragment>
      <a href="/" className="btn btn-primary mb-5">
        Kembali
      </a>
      <table className="table">
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
              <td>
                <button className="btn btn-danger" onClick={pinjam}>
                  Pinjam
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Books;
