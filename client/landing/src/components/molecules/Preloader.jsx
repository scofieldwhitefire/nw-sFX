import { Logo } from "../../assets/images/logo";

const Preloader = () => {
  return (
    <>
      {/* <!-- ===============>> Preloader start here <<================= --> */}
      <div className="preloader">
        <img src={Logo.preloader} alt="preloader icon" />
      </div>
      {/* <!-- ===============>> Preloader end here <<================= --> */}
    </>
  );
};

export default Preloader;
