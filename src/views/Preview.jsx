import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Preview = () => {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  document.body.classList.remove("dark");
  return (
    <>
      <div className="tokyo_tm_all_wrap">
        <div className="tokyo_tm_intro">
          <div className="short_info">
            <img src="assets/img/logo/dark.png" alt="logo" />
            <h3>Personal Portfolio React + RTL Template</h3>
          </div>
          {/* END SHORT INFO */}

          <div className="tokyo_tm_intro_fixed_price">
            <span className="anim"></span>
            <span className="anim"></span>
            <span className="anim"></span>
            <a
              href="https://themeforest.net/item/tokyo-react-personal-portfolio-template/32322644"
              className="pricing-info anim"
              target="_blank"
            >
              Buy
            </a>
          </div>
          {/* END VERTICAL LINE */}
          <div className="container">
            <Slider {...settings}>
              <div className="left">
                <Link to="/home-light" target="_blank">
                  <div className="desc">
                    <img src="assets/img/intro/light.png" alt="" />
                    <h3 className="title">Light Demo</h3>
                  </div>
                </Link>
              </div>
              {/* END LEFT DEMO */}
              <div className="right">
                <Link to="/home-dark" target="_blank">
                  <div className="desc">
                    <img src="assets/img/intro/dark.png" alt="" />
                    <h3 className="title"> Dark Demo</h3>
                  </div>
                </Link>
              </div>
              {/* END RIGHT DEMO */}

              <div className="left">
                <Link to="/rtl-home-light" target="_blank">
                  <div className="desc">
                    <img src="assets/img/intro/light-rtl.png" alt="demo" />
                    <h3 className="title">RTL Light Demo</h3>
                  </div>
                </Link>
              </div>
              {/* END LEFT DEMO */}
              <div className="right">
                <Link to="/rtl-home-dark" target="_blank">
                  <div className="desc">
                    <img src="assets/img/intro/dark-rtl.png" alt="demo" />
                    <h3 className="title">RTL Dark Demo</h3>
                  </div>
                </Link>
              </div>
              {/* END RIGHT DEMO */}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
