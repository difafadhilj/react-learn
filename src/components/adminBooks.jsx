import React, { useState, useMemo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Books(props) {
  const history = useHistory();
  const [data, setData] = useState([]);
  let id = props.match.params.id;

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/books/", {
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

  const DeleteBook = async id => {
    let result = await axios.delete("http://localhost:8080/books/" + id, {
      headers: {
        Authorization: window.sessionStorage.getItem("token")
      }
    });
    if (result.status === 200) {
      history.push("/admin");
      alert("Book has been deleted!");
    }
  };

  let no = 1;
  if (window.sessionStorage.getItem("role") !== "ADMIN")
    return <h1>Requided admin previllege</h1>;
  return (
    <React.Fragment>
      <a
        className="btn btn-primary mb-5"
        href={"http://localhost:3000/admin/inputBook/"}
      >
        Add a book
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
                <a
                  className="btn btn-success"
                  href={"http://localhost:3000/admin/EditBook/" + item.id}
                >
                  Ubah
                </a>
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => DeleteBook(item.id)}
                >
                  Hapus
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
