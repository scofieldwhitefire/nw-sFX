import { Static } from "../../assets/images";

const ContactBloc = () => {
  return (
    <>
      <div class="contact__details">
        <div
          class="contact__item"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="contact__item-inner">
            <div class="contact__item-thumb">
              <span>
                <img src={Static.contact1} alt="contact-icon" class="dark" />
              </span>
            </div>
            <div class="contact__item-content">
              <p>0917749254</p>
              <p>0983888611</p>
            </div>
          </div>
        </div>
        <div
          class="contact__item"
          data-aos="fade-right"
          data-aos-duration="1100"
        >
          <div class="contact__item-inner">
            <div class="contact__item-thumb">
              <span>
                <img src={Static.contact2} alt="contact-icon" class="dark" />
              </span>
            </div>
            <div class="contact__item-content">
              <p>Bitrader@gmail.com</p>
              <p>hello@gmail.com</p>
            </div>
          </div>
        </div>
        <div
          class="contact__item"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div class="contact__item-inner">
            <div class="contact__item-thumb">
              <span>
                <img src={Static.contact3} alt="contact-icon" class="dark" />
              </span>
            </div>
            <div class="contact__item-content">
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
