import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";


const Contact = () => {

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">CONTACT ME THROUGH BELOW DETAILS</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9036812819
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              shashwathbc@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              #10 Adithyanagara Bangalore- 62
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;