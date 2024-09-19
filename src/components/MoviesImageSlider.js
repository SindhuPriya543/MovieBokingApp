import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import leftarrow from "../images/arrow-left-3099.png"; // Replace with better arrow image
import rightarrow from "../images/arrow-right-3098.png"; // Replace with better arrow image
import "../css/home.css"; // Import custom CSS for scrollbar styling

const MoviesImageSlider = () => {
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
  const images = [
    "https://i.ytimg.com/vi/u2NuUWuwPCM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAOCoIl_z_mh65aeD8irtoicup6-w",
    "https://m.media-amazon.com/images/S/pv-target-images/58e8a7988c6ba4b1979709adb606ca5b59a39eaf6fb02060bcdfef01ef1d8909.jpg",
    "https://i.ytimg.com/vi/Sz71FoG5z2g/maxresdefault.jpg",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EFE5D659E7C958E1177440F847E6CDAEBFD90F3162991ABE61FB584231DDAC1/scale?width=1200&aspectRatio=1.78&format=webp",
  ];

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