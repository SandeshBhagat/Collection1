import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  console.log(image);
  const handleImgClick = () => {
    inputRef.current.click();
  };
  const handleImgChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  const [startDate, setStartDate] = useState(null);

  return (
    <div className="App">
      <h2>Add Adventure</h2>

      <div className="section-container">
        <section className="img">
          <div className="img-container">
            {image ? (
              <div className="img-block-select">
                <img src={URL.createObjectURL(image)} alt="" />
              </div>
            ) : (
              <div className="img-block">
                <img src="/imgBg.jpg" alt="" />
              </div>
            )}
          </div>

          {image ? (
            <>
              <div className="btns">
                <button
                  type="button"
                  className="img-button"
                  onClick={handleImgClick}
                  style={{ marginRight: "10px" }}
                >
                  Change Image
                </button>

                <button
                  type="button"
                  className="img-button-remove"
                  onClick={() => setImage("")}
                  // onClick={handleImgClick}
                >
                  Remove Image
                </button>

                <input
                  type="file"
                  className="input"
                  onChange={handleImgChange}
                  ref={inputRef}
                  style={{ display: "none" }}
                />
              </div>
            </>
          ) : (
            <>
              <button
                type="button"
                className="img-button"
                onClick={handleImgClick}
              >
                Select Image
              </button>
              <input
                type="file"
                className="input"
                onChange={handleImgChange}
                ref={inputRef}
                style={{ display: "none" }}
              />
            </>
          )}
        </section>

        <section className="inputs">
          <label>Select Date:</label>
          <br />
          <div className="datepicker">
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              isClearable={true}
            />
          </div>

          <label>Add Title:</label>
          <br />
          <input className="title" type="text" />
          <br />
          <label>Add Description:</label>
          <br />
          <textarea name="" id="" cols="" rows=""></textarea>
          <button type="button" className="submit">
            Submit
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
