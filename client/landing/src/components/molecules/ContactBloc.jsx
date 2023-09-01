import { Static } from "../../assets/images";

const ContactBloc = () => {
  const sendOut = (x, y) => {
    y === "mail"
      ? (window.location.href = `mailto:${x}`)
      : (window.location.href = `tell:${x}`);
  };
  return (
    <>
      <div className="contact__details">
        <div
          className="contact__item"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="contact__item-inner">
            <div className="contact__item-thumb">
              <span>
                <img
                  src={Static.contact1}
                  alt="contact-icon"
                  className="dark"
                />
              </span>
            </div>
            <div className="contact__item-content">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => sendOut("help@safewayfx.com", "tell")}
              >
                +1(323){/* <!-- Comment--> */} 767 {/* <!-- Comment--> */}5226
              </span>
              <br />
              <span
                style={{ cursor: "pointer" }}
                onClick={() => sendOut("support@safewayfx.com", "tell")}
              >
                +1(323){/* <!-- Comment--> */} 707 {/* <!-- Comment--> */}5226
              </span>
            </div>
          </div>
        </div>
        <div
          className="contact__item"
          data-aos="fade-right"
          data-aos-duration="1100"
        >
          <div className="contact__item-inner">
            <div className="contact__item-thumb">
              <span>
                <img
                  src={Static.contact2}
                  alt="contact-icon"
                  className="dark"
                />
              </span>
            </div>
            <div className="contact__item-content">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => sendOut("help@safewayfx.com", "mail")}
              >
                help{/* <!-- Comment--> */}@safwayfx.{/* <!-- Comment--> */}com
              </span>
              <br />
              <span
                style={{ cursor: "pointer" }}
                onClick={() => sendOut("support@safewayfx.com", "mail")}
              >
                support{/* <!-- Comment--> */}@safwayfx.{/* <!-- Comment--> */}
                com
              </span>
            </div>
          </div>
        </div>
        <div
          className="contact__item"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="contact__item-inner">
            <div className="contact__item-thumb">
              <span>
                <img
                  src={Static.contact3}
                  alt="contact-icon"
                  className="dark"
                />
              </span>
            </div>
            <div className="contact__item-content">
              <p>88 Sheridan Street</p>
              <p>534 Victoria Trail</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBloc;
