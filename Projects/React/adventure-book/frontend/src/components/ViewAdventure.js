import "../css/viewAdv.css";
import img from "../assets/img/login-bg.jpg";

const ViewAdventure = () => {
  return (
    <div className="App">
      <div className="section-container">
        <section className="img">
          <div className="img-container">
            <img src={img} alt="" />
          </div>
        </section>

        <section className="inputsV inputs">
          <label>Date:</label>
          <br />
          <p>29 /07 /2023</p>
          <label className="titleV">Title:</label>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laudantium, suscipit.
          </p>
          <br />
          <label>Description:</label>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magni
            cupiditate itaque excepturi facilis corrupti labore! Eius nam, nemo
            cumque rerum, sit doloremque possimus obcaecati, molestiae ipsam
            explicabo aliquam? Officiis?
          </p>

          <button type="button" className="EditV">
            Edit
          </button>
        </section>
      </div>
    </div>
  );
};

export default ViewAdventure;
