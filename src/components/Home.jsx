import React, { useState, useMemo } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/books", {
        headers: {
          Authorization: window.sessionStorage.getItem("token")
        }
      });
      setData(result.data.book);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);
  let no = 1;

  if (window.sessionStorage.getItem("role") !== "USER")
    return (
      <React.Fragment>
        <div className="container mb-5" style={{ textAlign: "center" }}>
          <h1>Selamat Datang di Library Library</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="jumbotron" style={{ textAlign: "center" }}>
              <h3>Anda menjadi pintar</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="jumbotron" style={{ textAlign: "center" }}>
              <h3>Anda menjadi pintar</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="jumbotron" style={{ textAlign: "center" }}>
              <h3>Anda menjadi pintar</h3>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

  return (
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
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>
              <a
                className="btn btn-success"
                href={"http://localhost:3000/books/" + item.id}
              >
                Lihat
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Home;
