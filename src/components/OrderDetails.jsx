import React, { useState, useMemo } from "react";
import axios from "axios";

function OrderDetails(props) {
  const [data, setData] = useState([]);
  let id = props.match.params.id;

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/orders/" + id, {
        headers: {
          Authorization: window.sessionStorage.getItem("token")
        }
      });
      setData(result.data.user.books);
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
      <a href="/admin/order" className="btn btn-primary mb-5">
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

export default OrderDetails;
