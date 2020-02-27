import React, { useState, useMemo } from "react";
import axios from "axios";

function Order() {
  const [data, setData] = useState([]);

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/orders/", {
        headers: {
          Authorization: window.sessionStorage.getItem("token")
        }
      });
      console.log(result.data);
      setData(result.data.user);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);

  let no = 1;
  if (window.sessionStorage.getItem("role") !== "ADMIN") {
    return <h1>Requided admin previllege</h1>;
  }

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <td>No.</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr key={id}>
              <td>{no++}</td>
              <td>
                <a href={"http://localhost:3000/admin/orderDetails/" + item.id}>
                  {item.name}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Order;
