import { Static } from "../assets/images";
import LckImg0 from "../assets/images/LckImg0";
import LckImg1 from "../assets/images/LckImg1";
import LckImg2 from "../assets/images/LckImg2";
import LckImg3 from "../assets/images/LckImg3";
import LckImg4 from "../assets/images/LckImg4";
import { Link } from "../config/libs";

const Locked = () => {
  return (
    <>
      <div className="auth-bg">
        <section className="vh-100">
          <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
              <div className="col-lg-6">
                <div className="row lockscreen">
                  <div className="col-md-8">
                    <div className="card d-flex justify-content-center mb-0">
                      <div className="card-body">
                        <div className="auth-form">
                          <div className="text-center">
                            <img
                              src={Static.avatar}
                              className="img-fluid avatar avatar-100 avatar-rounded"
                              alt="profile-image"
                            />
                          </div>
                          <div>
                            <h1 className="mt-3 text-center">
                              Hi! Austin Robertson
                            </h1>
                            <p className="text-center  mt-2">
                              Enter your password to continue session.
                            </p>
                            <div className="form-floating mb-2">
                              <input
                                type="password"
                                className="form-control"
                                id="Password"
                                placeholder="Password"
                              />
                              <label for="Password">Password</label>
                            </div>
                          </div>
                          <div className="text-center mt-3">
                            <button className="btn btn-primary ">Login</button>
                          </div>
                        </div>
                        <div className="new-account mt-3 text-center">
                          <p>
                            or{" "} 
                            <Link className="text-primary" to="/logout">
                              logout
                            </Link>{" "}
                            to end your session.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 res-hide">
                <div className="d-block ms-lg-5 ps-lg-5">
                  <svg
                    width="657"
                    viewBox="0 0 657 568"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Lockscreen">
                      <g filter="url(#filter0_di)">
                        <path
                          d="M60 268.674L324.344 121.035L589.391 268.674L324.344 424.046L60 268.674Z"
                          fill="#202022"
                        />
                        <path
                          d="M324.344 423.467L61.0056 268.685L324.344 121.607L588.384 268.685L324.344 423.467Z"
                          stroke="black"
                        />
                      </g>
                      <g filter="url(#filter1_di)">
                        <path
                          d="M23 188.967L67.5859 164.065L112.29 188.967L67.5859 215.173L23 188.967Z"
                          fill="#202022"
                        />
                        <path
                          d="M67.5862 214.593L24.0056 188.978L67.5862 164.638L111.283 188.978L67.5862 214.593Z"
                          stroke="black"
                        />
                      </g>
                      <g filter="url(#filter2_di)">
                        <path
                          d="M168 118.967L212.586 94.0651L257.29 118.967L212.586 145.173L168 118.967Z"
                          fill="#202022"
                        />
                        <path
                          d="M212.586 144.593L169.006 118.978L212.586 94.6376L256.283 118.978L212.586 144.593Z"
                          stroke="black"
                        />
                      </g>
                      <g filter="url(#filter3_di)">
                        <path
                          d="M465 156.967L509.586 132.065L554.29 156.967L509.586 183.173L465 156.967Z"
                          fill="#202022"
                        />
                        <path
                          d="M509.586 182.593L466.006 156.978L509.586 132.638L553.283 156.978L509.586 182.593Z"
                          stroke="black"
                        />
                      </g>
                      <g filter="url(#filter4_di)">
                        <path
                          d="M544 360.967L588.586 336.065L633.29 360.967L588.586 387.173L544 360.967Z"
                          fill="#202022"
                        />
                        <path
                          d="M588.586 386.593L545.006 360.978L588.586 336.638L632.283 360.978L588.586 386.593Z"
                          stroke="black"
                        />
                      </g>
                      <g filter="url(#filter5_di)">
                        <path
                          d="M413 440.967L457.586 416.065L502.29 440.967L457.586 467.173L413 440.967Z"
                          fill="#202022"
                        />
                        <path
                          d="M457.586 466.593L414.006 440.978L457.586 416.638L501.283 440.978L457.586 466.593Z"
                          stroke="black"
                        />
                      </g>
                      <ellipse
                        cx="325"
                        cy="291.5"
                        rx="78"
                        ry="48.5"
                        fill="#DFBD64"
                      />
                      <path
                        d="M403 291.498C403 318.284 368.078 339.998 325 339.998C281.922 339.998 247 318.284 247 291.498C247 281.348 226.239 263.168 217.5 244.5C203.176 213.903 198 181.998 198 181.998H448.5C448.5 181.998 446.328 214.667 433.5 244.5C424.129 266.293 403 286.573 403 291.498Z"
                        fill="url(#paint0_linear)"
                      />
                      <path
                        d="M369.5 279.902C369.5 287.645 364.395 294.734 355.972 299.913C347.558 305.088 335.901 308.305 323 308.305C310.099 308.305 298.442 305.088 290.028 299.913C281.605 294.734 276.5 287.645 276.5 279.902C276.5 272.16 281.605 265.071 290.028 259.891C298.442 254.717 310.099 251.5 323 251.5C335.901 251.5 347.558 254.717 355.972 259.891C364.395 265.071 369.5 272.16 369.5 279.902Z"
                        fill="#DFBD64"
                        stroke="black"
                      />
                      <path
                        d="M439 228.5C439 248.876 426.945 267.879 406.32 282.004C385.72 296.113 356.984 305 325 305C293.016 305 264.28 296.113 243.68 282.004C223.055 267.879 211 248.876 211 228.5C211 208.124 223.055 189.121 243.68 174.996C264.28 160.887 293.016 152 325 152C356.984 152 385.72 160.887 406.32 174.996C426.945 189.121 439 208.124 439 228.5Z"
                        stroke="#FDDB82"
                        strokeWidth="10"
                      />
                      <ellipse
                        cx="589.5"
                        cy="360.5"
                        rx="24.5"
                        ry="15.5"
                        fill="#DFBD64"
                      />
                      <ellipse
                        cx="509.5"
                        cy="155.5"
                        rx="24.5"
                        ry="15.5"
                        fill="#DFBD64"
                      />
                      <ellipse
                        cx="213.5"
                        cy="116.5"
                        rx="24.5"
                        ry="15.5"
                        fill="#DFBD64"
                      />
                      <ellipse
                        cx="68.5"
                        cy="187.5"
                        rx="24.5"
                        ry="15.5"
                        fill="#DFBD64"
                      />
                      <ellipse
                        cx="457.5"
                        cy="439.5"
                        rx="24.5"
                        ry="15.5"
                        fill="#DFBD64"
                      />
                      <path
                        d="M603.5 357.5C603.5 359.588 602.001 361.579 599.36 363.075C596.734 364.564 593.072 365.5 589 365.5C584.928 365.5 581.266 364.564 578.64 363.075C575.999 361.579 574.5 359.588 574.5 357.5C574.5 355.412 575.999 353.421 578.64 351.925C581.266 350.436 584.928 349.5 589 349.5C593.072 349.5 596.734 350.436 599.36 351.925C602.001 353.421 603.5 355.412 603.5 357.5Z"
                        fill="#DFBD64"
                        stroke="black"
                      />
                      <path
                        d="M523.5 152.5C523.5 154.588 522.001 156.579 519.36 158.075C516.734 159.564 513.072 160.5 509 160.5C504.928 160.5 501.266 159.564 498.64 158.075C495.999 156.579 494.5 154.588 494.5 152.5C494.5 150.412 495.999 148.421 498.64 146.925C501.266 145.436 504.928 144.5 509 144.5C513.072 144.5 516.734 145.436 519.36 146.925C522.001 148.421 523.5 150.412 523.5 152.5Z"
                        fill="#DFBD64"
                        stroke="black"
                      />
                      <path
                        d="M227.5 113.5C227.5 115.588 226.001 117.579 223.36 119.075C220.734 120.564 217.072 121.5 213 121.5C208.928 121.5 205.266 120.564 202.64 119.075C199.999 117.579 198.5 115.588 198.5 113.5C198.5 111.412 199.999 109.421 202.64 107.925C205.266 106.436 208.928 105.5 213 105.5C217.072 105.5 220.734 106.436 223.36 107.925C226.001 109.421 227.5 111.412 227.5 113.5Z"
                        fill="#DFBD64"
                        stroke="black"
                      />
                      <path
                        d="M82.5 184.5C82.5 186.588 81.0014 188.579 78.3601 190.075C75.7337 191.564 72.0719 192.5 68 192.5C63.9281 192.5 60.2663 191.564 57.6399 190.075C54.9986 188.579 53.5 186.588 53.5 184.5C53.5 182.412 54.9986 180.421 57.6399 178.925C60.2663 177.436 63.9281 176.5 68 176.5C72.0719 176.5 75.7337 177.436 78.3601 178.925C81.0014 180.421 82.5 182.412 82.5 184.5Z"
                        fill="#DFBD64"
                        stroke="black"
                      />
                      <path
                        d="M471.5 436.5C471.5 438.588 470.001 440.579 467.36 442.075C464.734 443.564 461.072 444.5 457 444.5C452.928 444.5 449.266 443.564 446.64 442.075C443.999 440.579 442.5 438.588 442.5 436.5C442.5 434.412 443.999 432.421 446.64 430.925C449.266 429.436 452.928 428.5 457 428.5C461.072 428.5 464.734 429.436 467.36 430.925C470.001 432.421 471.5 434.412 471.5 436.5Z"
                        fill="#DFBD64"
                        stroke="black"
                      />
                      <rect
                        id="Monero-4"
                        x="557"
                        y="290"
                        width="64"
                        height="64"
                        fill="url(#pattern0)"
                      />
                      <rect
                        id="Monero-3"
                        x="477"
                        y="85"
                        width="64"
                        height="64"
                        fill="url(#pattern1)"
                      />
                      <rect
                        id="Monero-2"
                        x="181"
                        y="46"
                        width="64"
                        height="64"
                        fill="url(#pattern2)"
                      />
                      <rect
                        id="Monero-1"
                        x="36"
                        y="117"
                        width="64"
                        height="64"
                        fill="url(#pattern3)"
                      />
                      <rect
                        id="Monero-5"
                        x="425"
                        y="369"
                        width="64"
                        height="64"
                        fill="url(#pattern4)"
                      />
                      <path
                        d="M613.832 360.652C613.832 369.128 602.958 376 589.545 376C576.131 376 565.257 369.128 565.257 360.652C565.257 352.175 550 326 550 326H628C628 326 613.832 356.96 613.832 360.652Z"
                        fill="url(#paint1_linear)"
                      />
                      <path
                        d="M533.832 155.652C533.832 164.128 522.958 171 509.545 171C496.131 171 485.257 164.128 485.257 155.652C485.257 147.175 470 121 470 121H548C548 121 533.832 151.96 533.832 155.652Z"
                        fill="url(#paint2_linear)"
                      />
                      <path
                        d="M237.832 116.652C237.832 125.128 226.958 132 213.545 132C200.131 132 189.257 125.128 189.257 116.652C189.257 108.175 174 82 174 82H252C252 82 237.832 112.96 237.832 116.652Z"
                        fill="url(#paint3_linear)"
                      />
                      <path
                        d="M92.8323 187.652C92.8323 196.128 81.9585 203 68.5449 203C55.1313 203 44.2575 196.128 44.2575 187.652C44.2575 179.175 29 153 29 153H107C107 153 92.8323 183.96 92.8323 187.652Z"
                        fill="url(#paint4_linear)"
                      />
                      <path
                        d="M481.832 439.652C481.832 448.128 470.958 455 457.545 455C444.131 455 433.257 448.128 433.257 439.652C433.257 431.175 418 405 418 405H496C496 405 481.832 435.96 481.832 439.652Z"
                        fill="url(#paint5_linear)"
                      />
                      <rect
                        id="Bitcoin-2"
                        x="239"
                        y="68"
                        width="168"
                        height="168"
                        fill="url(#pattern5)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_di"
                        x="37"
                        y="0"
                        width="575.391"
                        height="567.348"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="15" />
                        <feGaussianBlur stdDeviation="11.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow"
                        />
                      </filter>
                      <filter
                        id="filter1_di"
                        x="0"
                        y="137"
                        width="135.291"
                        height="133.934"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="15" />
                        <feGaussianBlur stdDeviation="11.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow"
                        />
                      </filter>
                      <filter
                        id="filter2_di"
                        x="145"
                        y="67"
                        width="135.291"
                        height="133.934"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="15" />
                        <feGaussianBlur stdDeviation="11.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow"
                        />
                      </filter>
                      <filter
                        id="filter3_di"
                        x="442"
                        y="105"
                        width="135.291"
                        height="133.934"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="15" />
                        <feGaussianBlur stdDeviation="11.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow"
                        />
                      </filter>
                      <filter
                        id="filter4_di"
                        x="521"
                        y="309"
                        width="135.291"
                        height="133.934"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="15" />
                        <feGaussianBlur stdDeviation="11.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow"
                        />
                      </filter>
                      <filter
                        id="filter5_di"
                        x="390"
                        y="389"
                        width="135.291"
                        height="133.934"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="15" />
                        <feGaussianBlur stdDeviation="11.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow"
                        />
                      </filter>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use xlinkHref="#image0" transform="scale(0.002)" />
                      </pattern>
                      <pattern
                        id="pattern1"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use xlinkHref="#image1" transform="scale(0.002)" />
                      </pattern>
                      <pattern
                        id="pattern2"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use xlinkHref="#image2" transform="scale(0.002)" />
                      </pattern>
                      <pattern
                        id="pattern3"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use xlinkHref="#image0" transform="scale(0.002)" />
                      </pattern>
                      <pattern
                        id="pattern4"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use xlinkHref="#image3" transform="scale(0.002)" />
                      </pattern>
                      <pattern
                        id="pattern5"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image4"
                          transform="translate(-0.0920245 -0.0858896) scale(0.000613497)"
                        />
                      </pattern>
                      <linearGradient
                        id="paint0_linear"
                        x1="323.25"
                        y1="181.998"
                        x2="323.25"
                        y2="339.998"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="#DFBD64" stopOpacity="0" />
                        <stop offset="1" stopColor="#DFBD64" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear"
                        x1="589"
                        y1="326"
                        x2="589"
                        y2="376"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="#DFBD64" stopOpacity="0" />
                        <stop offset="1" stopColor="#DFBD64" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear"
                        x1="509"
                        y1="121"
                        x2="509"
                        y2="171"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="#DFBD64" stopOpacity="0" />
                        <stop offset="1" stopColor="#DFBD64" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear"
                        x1="213"
                        y1="82"
                        x2="213"
                        y2="132"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="#DFBD64" stopOpacity="0" />
                        <stop offset="1" stopColor="#DFBD64" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear"
                        x1="68"
                        y1="153"
                        x2="68"
                        y2="203"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="#DFBD64" stopOpacity="0" />
                        <stop offset="1" stopColor="#DFBD64" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear"
                        x1="457"
                        y1="405"
                        x2="457"
                        y2="455"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="#DFBD64" stopOpacity="0" />
                        <stop offset="1" stopColor="#DFBD64" />
                      </linearGradient>
                      <LckImg0 />
                      <LckImg1 />
                      <LckImg2 />
                      <LckImg3 />
                      <LckImg4 />
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Locked;
