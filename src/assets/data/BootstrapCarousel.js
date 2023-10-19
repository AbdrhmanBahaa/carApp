import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import ReactPlayer from "react-player";
import "../../styles/bootstrap-carousel.css"; // Import your CSS file here

export class BootstrapCarousel extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row title">{/* Add your title here if needed */}</div>
        </div>
        <div className="container-fluid">
          <Carousel interval={null}>
            <Carousel.Item className="carousel-item-black">
              <div className="react-player-wrapper carousel-item-video">
                <ReactPlayer
                  url="src/assets/all-images/videos/teleg.mp4"
                  controls
                />
              </div>
            </Carousel.Item>
            <Carousel.Item className="carousel-item-black">
              <div className="react-player-wrapper carousel-item-video">
                <ReactPlayer
                  url="src/assets/all-images/videos/teleg.mp4"
                  controls
                />
              </div>
            </Carousel.Item>
            <Carousel.Item className="carousel-item-black">
              <div className="react-player-wrapper carousel-item-video">
                <ReactPlayer
                  url="src/assets/all-images/videos/teleg.mp4"
                  controls
                />
              </div>
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
    );
  }
}

export default BootstrapCarousel;
