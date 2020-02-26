import React, { useState, useMemo } from "react";
import axios from "axios";

function Books(props) {
  const [data, setData] = useState([]);
  let id = window.sessionStorage.getItem("userId");

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/orders/" + id, {
        headers: {
          Authorization: window.sessionStorage.getItem("token")
        }
      });
      console.log(result);
      setData(result.data.user.books);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);
  if (window.sessionStorage.getItem("role") !== "USER")
    return <h1>Try to login as User</h1>;

  let no = 1;

  if (data.length === 0) return <h1>You don't have any order</h1>;
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
            <td>Rent time</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr key={id}>
              <td>{no++}</td>
              <td>
                <a>{item.title}</a>
              </td>
              <td>{item.orders.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Books;
