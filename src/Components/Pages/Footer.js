import React from "react";
import "../../assets/css/Footer.css";
import { IMAGES_PATH_FOOTER } from "../../Constants/ImagesConst";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const Navigate = useNavigate();
  function handleContect() {
    Navigate("./Contect");
  }
  function handleCareer() {
    Navigate("/career");
  }
  function handlePrivancy() {
    Navigate("/privacy");
  }
  function handleTerms() {
    Navigate("/terms&condition");
  }
  function handleAbout() {
    Navigate("/aboutus");
  }
  function handleTutorial() {
    Navigate("/tutorial");
  }
  function handleBlogs() {
    Navigate("/blogs");
  }
  function handleHome() {
    Navigate("/");
  }
  return (
    <>
      <div className="container containerss" style={{ marginTop: 70 }}>
        <div className="lineWidth"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-6 order-md-1">
              <div class="FooterHeading">
                <h2 className="FooterHeading_h2">
                  Subscribe to our newsletter
                </h2>
                <p className="FooterHeading_h2">
                  Stay up to date with the latest news, announcements, and
                  articles.
                </p>
              </div>
            </div>
            <div class="col-md-6 order-md-2 ">
              <div class="row flex-column flex-sm-row rowa">
                <div class="col-sm-8 order-1 order-sm-1 subscribe_btns ">
                  <input
                    type="text"
                    class=" form-controls"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="col-sm-4 subscribe_btns mt-3 mt-sm-0 order-1 order-sm-2">
                  <button class=" subscribe btn-block">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* detail start  */}
        <div className="col-lg-12 detsilsFooter row pt-5">
          <div className="col-lg-3">
            <div className="fOOTER_LOGO" onClick={handleHome}>
              <img
                src={IMAGES_PATH_FOOTER + "/DB_LOGO 1.png"}
                style={{ width: 50, height: 40 }}
              />
              <span>DASHBACK</span>
            </div>
          </div>
          <div class="col-lg-9">
            <div class=" fotter_detailsss">
              <div class="">
                <h3>Company</h3>
                <p onClick={handleAbout}>About Us</p>
                <p>Our Partners</p>
                <p onClick={handleContect}>Contact Us</p>
              </div>
              <div class="">
                <h3>Tools</h3>
                <p>Contact Us</p>
                <p>Cashback Calculator</p>
                <p onClick={handleCareer}>Prosperity Plans</p>
              </div>
              <div class="">
                <h3>Resources</h3>
                <p onClick={handleBlogs}>Blogs</p>
                <p onClick={handleTutorial}>Tutorials</p>
                <p>FAQs</p>
              </div>
              <div class="">
                <h3>Legal</h3>
                <p onClick={handleTerms}> Terms & Conditions</p>
                <p onClick={handlePrivancy}>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lineWidth"></div>
        <div className="d-flex  justify-content-between   mt-0">
          <div className="d-flex text-center Footer_bottom">
            <div className="footer_responsive">
              <img src={IMAGES_PATH_FOOTER + "/Group.png"} />
              <span>HardCipher Pvt. Ltd. 2020-23,</span>
              <div>
                <p>All Rights Reserved</p>
              </div>
            </div>
          </div>
          <div className="social_medai me-4">
            <span>
              <img src={IMAGES_PATH_FOOTER + "/Vector (3).png"} />
            </span>
            <span>
              <img src={IMAGES_PATH_FOOTER + "/icons8-linkedin 1.png"} />
            </span>
            <span>
              <img src={IMAGES_PATH_FOOTER + "/icons8-facebook 1.png"} />
            </span>
            <span>
              <img src={IMAGES_PATH_FOOTER + "/icons8-instagram 1.png"} />
            </span>
            <span>
              <img src={IMAGES_PATH_FOOTER + "/icons8-twitter 1.png"} />
            </span>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Footer;
