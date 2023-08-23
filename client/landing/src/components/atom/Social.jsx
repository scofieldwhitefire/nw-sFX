const Social = ({ style, others='' }) => {
  return (
    <>
      <ul className={`social ${others}`}>
        {/* <li className="social__item">
                      <a
                        href="#"
                        className={`social__link social__link--${style}`}>
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li> */}
        <li className="social__item">
          <a href="#" className={`social__link social__link--${style}`}>
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="social__item">
          <a href="#" className={`social__link social__link--${style}`}>
            <i className="fa-brands fa-medium-m"></i>
          </a>
        </li>
        <li className="social__item">
          <a href="#" className={`social__link social__link--${style}`}>
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li className="social__item">
          <a href="#" className={`social__link social__link--${style}`}>
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Social;
