import React, { useState, useMemo } from "react";
import axios from "axios";

function User() {
  const [data, setData] = useState([]);

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/users/", {
        headers: {
          Authorization: window.sessionStorage.getItem("token")
        }
      });
      setData(result.data.user);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);

  let no = 1;
  if (window.sessionStorage.getItem("role") !== "ADMIN")
    return <h1>Requided admin previllege</h1>;
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <td>No.</td>
            <td>Name</td>
            <td>Email</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr key={id}>
              <td>{no++}</td>
              <td>
                <a>{item.name}</a>
              </td>
              <td>{item.email}</td>
              <td>
                <a href="http://" className="btn btn-primary">
                  Promote to admin
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default User;
