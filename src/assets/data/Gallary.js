import React from "react";
import "../../styles/gallary.css";
// import "../../styles/services-list.css";

import DetailsThumb from "../data/DetailsThumb";

class Gallary extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "",
        src: [
          "https://www.solido.com/wp-content/uploads/2022/09/bmw-e30-m3-dakar-yellow-street-fighter-1990-04.jpg",
          "https://www.solido.com/wp-content/uploads/2022/09/bmw-e30-m3-dakar-yellow-street-fighter-1990-05.jpg",
          "https://www.solido.com/wp-content/uploads/2022/09/bmw-e30-m3-dakar-yellow-street-fighter-1990-06.jpg",
          "https://www.solido.com/wp-content/uploads/2022/09/bmw-e30-m3-dakar-yellow-street-fighter-1990-03.jpg",
          "https://www.solido.com/wp-content/uploads/2022/09/bmw-e30-m3-dakar-yellow-street-fighter-1990-03.jpg",
        ],

        count: 1,
      },
    ],
    index: 0,
  };
  

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="gallary">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>

            <div className="box">
              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Gallary;
