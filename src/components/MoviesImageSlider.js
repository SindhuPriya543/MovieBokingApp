import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import leftarrow from "../images/arrow-left-3099.png"; // Replace with better arrow image
import rightarrow from "../images/arrow-right-3098.png"; // Replace with better arrow image
import "../css/home.css"; // Import custom CSS for scrollbar styling

const MoviesImageSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const imageRef = useRef(null); // Reference for the image

  const scrollLeft = () => {
    if (imageRef.current) {
      const imageWidth = imageRef.current.offsetWidth;
      sliderRef.current.scrollBy({
        left: -imageWidth, // Scroll by image width to the left
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (imageRef.current) {
      const imageWidth = imageRef.current.offsetWidth;
      sliderRef.current.scrollBy({
        left: imageWidth, // Scroll by image width to the right
        behavior: "smooth",
      });
    }
  };

  return (
    <Container fluid className="position-relative p-0">
      <Row className="justify-content-center">
        <Col className="text-center" md={12} style={{ maxWidth: "70rem" }}>
          <Button
            onClick={scrollLeft}
            className="position-absolute start-0 top-50 translate-middle-y bg-white text-white rounded-circle border-0 p-2"
            style={{
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Smaller shadow
              width: "3rem",
              height: "3rem",
            }}
          >
            <img
              src={leftarrow}
              alt="Previous"
              className="w-100 h-100"
            />
          </Button>

          <div
            ref={sliderRef}
            className="d-flex overflow-hidden"
            style={{ scrollBehavior: "smooth", height: "30vh", whiteSpace: "nowrap" }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                ref={index === 0 ? imageRef : null} // Assign the ref to the first image to get its width
                src={image}
                alt={`Slide ${index}`}
                className="me-3 rounded"
                style={{
                  height: "100%",
                  width: "auto",
                  display: "inline-block",
                }}
              />
            ))}
          </div>

          <Button
            onClick={scrollRight}
            className="position-absolute end-0 top-50 translate-middle-y text-white bg-white rounded-circle border-0 p-2"
            style={{
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Smaller shadow
              width: "3rem",
              height: "3rem",
            }}
          >
            <img
              src={rightarrow}
              alt="Next"
              className="w-100 h-100"
            />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesImageSlider;