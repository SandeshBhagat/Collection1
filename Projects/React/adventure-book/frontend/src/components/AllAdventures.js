import "../css/allAdv.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/img/login-bg.jpg";
import { useNavigate } from "react-router-dom";

const AllAdv = () => {
  const history = useNavigate();

  const navigate = () => {
    history("/viewadv");
  };

  return (
    <div className="alladv-main">
      <h2>All Adventures</h2>
      <div className="cards-container">
        <div className="card" onClick={navigate}>
          <img src={img} alt="" />
          <p className="title">This is card title</p>
          <p className="date">27/06/2023</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi
            cupiditate delectus illum voluptatibus voluptates veniam adipisci
            eius tenetur omnis?
          </p>

          <div className="btns">
            <button type="button" className="edit-btn">
              Edit
            </button>

            <div className="delete">
              <FontAwesomeIcon icon={faTrash} title="Delete" />
            </div>
          </div>
        </div>
        <div className="card">
          <img src={img} alt="" />
          <p className="title">This is card title</p>
          <p className="date">27/06/2023</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi
            cupiditate delectus illum voluptatibus voluptates veniam adipisci
            eius tenetur omnis?
          </p>

          <div className="btns">
            <button type="button" className="edit-btn">
              Edit
            </button>

            <div className="delete">
              <FontAwesomeIcon icon={faTrash} title="Delete" />
            </div>
          </div>
        </div>

        <div className="card">
          <img src={img} alt="" />
          <p className="title">This is card title</p>
          <p className="date">27/06/2023</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi
            cupiditate delectus illum voluptatibus voluptates veniam adipisci
            eius tenetur omnis?
          </p>

          <div className="btns">
            <button type="button" className="edit-btn">
              Edit
            </button>

            <div className="delete">
              <FontAwesomeIcon icon={faTrash} title="Delete" />
            </div>
          </div>
        </div>
        <div className="card">
          <img src={img} alt="" />
          <p className="title">This is card title</p>
          <p className="date">27/06/2023</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi
            cupiditate delectus illum voluptatibus voluptates veniam adipisci
            eius tenetur omnis?
          </p>

          <div className="btns">
            <button type="button" className="edit-btn">
              Edit
            </button>

            <div className="delete">
              <FontAwesomeIcon icon={faTrash} title="Delete" />
            </div>
          </div>
        </div>
        <div className="card">
          <img src={img} alt="" />
          <p className="title">This is card title</p>
          <p className="date">27/06/2023</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi
            cupiditate delectus illum voluptatibus voluptates veniam adipisci
            eius tenetur omnis?
          </p>

          <div className="btns">
            <button type="button" className="edit-btn">
              Edit
            </button>

            <div className="delete">
              <FontAwesomeIcon icon={faTrash} title="Delete" />
            </div>
          </div>
        </div>
        <div className="card">
          <img src={img} alt="" />
          <p className="title">This is card title</p>
          <p className="date">27/06/2023</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi
            cupiditate delectus illum voluptatibus voluptates veniam adipisci
            eius tenetur omnis?
          </p>

          <div className="btns">
            <button type="button" className="edit-btn">
              Edit
            </button>

            <div className="delete">
              <FontAwesomeIcon icon={faTrash} title="Delete" />
            </div>
          </div>
        </div>
        <div className="card">
          <img src={img} alt="" />
          <p className="title">This is card title</p>
          <p className="date">27/06/2023</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi
            cupiditate delectus illum voluptatibus voluptates veniam adipisci
            eius tenetur omnis?
          </p>

          <div className="btns">
            <button type="button" className="edit-btn">
              Edit
            </button>

            <div className="delete">
              <FontAwesomeIcon icon={faTrash} title="Delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAdv;
