import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./movieCreator.css";

export const MovieCreator = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setImgPreview(null);
  };

  // Image Preview
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);

  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if(selected && ALLOWED_TYPES.includes(selected.type)){
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      }
      reader.readAsDataURL(selected);
    }else{
      console.log("file not supported");
      setError(true);
    }
  }
 

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add new Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="my-1">
            <label htmlFor="name" className="m-2">
              Insert the Movie Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Insert the Movie Name"
              className="form-control"
            />

            <label htmlFor="language" className="m-2">
              Insert the Movie Language
            </label>

            <select
              name="language"
              id="language"
              className="form-control custom-select"
              placeholder="Insert the Movie language"
            >
              <option defaultValue disabled>
                Please, insert the Movie language
              </option>
              <option value="english">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>

            <label htmlFor="rating" className="m-2">
              Insert the Movie rating
            </label>

            <select
              name="rating"
              id="rating"
              className="form-control custom-select"
              placeholder="Insert the Movie rating"
            >
              <option defaultValue disabled>
                Please, insert the Movie rating
              </option>
              <option value="english">General Audiences</option>
              <option value="Spanish">+12 years</option>
              <option value="French">+14 years</option>
              <option value="German">+18 years</option>
            </select>

            <label htmlFor="length" className="m-2">
              Insert the Movie length (Minutes)
            </label>

            <input
              id="length"
              type="number"
              placeholder="Please, insert the Movie length"
              className="form-control"
            />

            <label htmlFor="releaseDate" className="m-2">
              Insert the Movie release date
            </label>

            <input
              type="date"
              name="releaseDate"
              id="releaseDate"
              className="form-control"
            />

            <label htmlFor="trailer" className="m-2">
              Insert the Movie Trailer URL
            </label>
            <input
              id="trailer"
              type="url"
              placeholder="Insert the Movie trailer"
              className="form-control"
            />

            <label htmlFor="synopsis" className="form-label m-2">
              Insert Movie Synopsis
            </label>
            <textarea
              placeholder="Synopsis..."
              className="form-control"
              id="synopsis"
              rows="3"
            ></textarea>

            <label htmlFor="director" className="m-2">
              Insert Movie Director Name
            </label>
            <input
              id="director"
              type="text"
              placeholder="Insert the Movie Director Name"
              className="form-control"
            />

            <label htmlFor="cast" className="m-2">
              Insert Movie Cast (each name separated by commas)
            </label>
            <input
              id="cast"
              type="text"
              placeholder="Insert the Movie Cast"
              className="form-control"
            /> 
            <br/>

            <div id="contenido">
              {error && <p className="errorMsg">File not supported</p>}
              <div 
              className="imgPreview"
              style={{ background:imgPreview ? `url("${imgPreview}") no-repeat center/cover` : "#dddddd" }}
              
              >
                {!imgPreview && (
                  <>
                    <p>Add Movie Poster</p>
                    <label htmlFor="fileUpload" className="customFileUpload">Choose File</label>
                    <input type="file" id="fileUpload" onChange={handleImageChange} />
                    <span>(jpg, jpeg or png)</span>
                  </>
                )}
              </div>
              { imgPreview && (
                <button className ="btn btn-danger form-control mt-3" onClick={() => setImgPreview(null)}>Remove Image</button>
              ) }
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
