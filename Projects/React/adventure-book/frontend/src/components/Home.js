import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

const Home = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  const getUserData = async () => {
    const res = await axios.get("http://localhost:8005/getdata", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // console.log(res);

    if (res.data.status === 401 || !res.data) {
      console.log("error");
    } else {
      setData(res.data.getUser);
    }
  };

  const dltUser = async (id) => {
    const res = await axios.delete(`http://localhost:8005/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("error");
    } else {
      console.log("user deleted");
      console.log(res.data);
    }
  };

  useEffect(() => {
    getUserData();
  }, [dltUser]);
  return (
    <>
      <div className="container mt-2">
        <h1 className="text-center mt-2">MERN</h1>
        <div className="text-end">
          <Button variant="primary">
            <NavLink to="/register" className="text-decoration-none text-light">
              Add User
            </NavLink>
          </Button>
        </div>

        <div className="row d-flex justify-content-between align-items-center mt-5">
          {data.length > 0
            ? data.map((el, i) => {
                return (
                  <>
                    <Card
                      style={{ width: "22rem", height: "18rem" }}
                      className="mb-3"
                      key={Number(el._id)}
                    >
                      <Card.Img
                        variant="top"
                        src={`http://localhost:8005/uploads/${el.imgpath}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          textAlign: "center",
                          margin: "auto",
                        }}
                        className="mt-2"
                      />
                      <Card.Body className="text-center">
                        <Card.Title>User Name: {el.fname}</Card.Title>
                        <Card.Text>
                          Date Added: {moment(el.date).format("L")}
                        </Card.Text>
                        <Button
                          variant="danger"
                          className="ps-5 pe-5"
                          onClick={() => dltUser(el._id)}
                        >
                          delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default Home;
