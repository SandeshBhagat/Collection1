import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const [fname, setFname] = useState("");
  const [file, setFile] = useState("");
const history = useNavigate();

  console.log(fname);
  console.log(file);

  const setData = (e) => {
    const { value } = e.target;
    setFname(value);
  };

  const setImg = (e) => {
    setFile(e.target.files[0]);
  };

  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);
    formData.append("fname", fname);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(
      "http://localhost:8005/register",
      formData,
      config
    );
    if(res.data.status === 401 || !res.data){
		console.log("error");
	}else{
		history("/")
	}
  };

  return (
    <>
      <div className="container mt-3">
        <h1>Upload Image</h1>

        <Form className="mt-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              onChange={setData}
              placeholder=""
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select Image</Form.Label>
            <Form.Control
              type="file"
              name="photo"
              onChange={setImg}
              placeholder=""
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={addUserData}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
