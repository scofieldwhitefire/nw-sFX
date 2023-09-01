import { useEffect, useState } from "react";

const Pagination = ({ len = 13, curr = 7 }) => {
  const [reRender, setReRender] = useState("left");
  const [list, setList] = useState([]);
//   let list = [curr];
    
    const init = () => {
        const xList = [curr]
        for (let j = 1; j <= len; j++) xList.push(j);
        // for (let j = 0; j <= 2; j++) xList.push(curr + j);
        xList.splice(-5)
        setList(xList)
    }

    useEffect(() => {
        init()
    }, [])

  const Switch = (e, x) => {
    e.preventDefault();
    setReRender(x);
  };

  if (reRender === "left") {
    if (curr > list[0]) {
    }
  }
  return (
    <div className="paginations" data-aos="fade-up" data-aos-duration="800">
      <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
        {curr > 1 ? (
          <li>
            <a href="#" className="active">
              <i className="fa-solid fa-angle-left me-2"></i> Prev
            </a>
          </li>
        ) : (
          <li>
            <a href="#">
              <i className="fa-solid fa-angle-left me-2"></i> Prev
            </a>
          </li>
        )}

        {list.map((x, i) => (
          <>
            <li key={`a${i}`}>
              <a href="#" className={`${curr === x && "active"}`}>
                {x}
              </a>
            </li>
          </>
        ))}

        {/* {reRender === "left" ? (
          list.length > 5 ? (
            <>
              {list.map((x, i) => (
                <>
                  {x < 4 && (
                    <li key={`a${i}`}>
                      <a href="#" className={`${curr === x && "active"}`}>
                        {x}
                      </a>
                    </li>
                  )}
                </>
              ))}
              {list.length > 5 && (
                <li onClick={(e) => Switch(e, "right")}>
                  <a href="#" className="dot">
                    ...
                  </a>
                </li>
              )}
              {list.map((y, j) => (
                <>
                  {y === len && (
                    <li key={`aa${j}`}>
                      <a href="#" className={`${curr === y && "active"}`}>
                        {y}
                      </a>
                    </li>
                  )}
                </>
              ))}
            </>
          ) : (
            <>
              {list.map((x, i) => (
                <>
                  <li key={`aaa${i}`}>
                    <a href="#" className={`${curr === x && "active"}`}>
                      {x}
                    </a>
                  </li>
                </>
              ))}
            </>
          )
        ) : list.length > 5 ? (
          <>
            {list.map((y, j) => (
              <>
                {y === 1 && (
                  <li key={`aa${j}`}>
                    <a href="#" className={`${curr === y && "active"}`}>
                      {y}
                    </a>
                  </li>
                )}
              </>
            ))}
            {list.length > 5 && (
              <li onClick={(e) => Switch(e, "left")}>
                <a href="#" className="dot">
                  ...
                </a>
              </li>
            )}
            {list.splice(-3).map((x, i) => (
              <>
                 {x < 4 && (
                <li key={`a${i}`}>
                  <a href="#" className={`${curr === x && "active"}`}>
                    {x}
                  </a>
                </li>
                {/* )}
              </>
            ))}
          </>
        ) : (
          <>
            {list.map((x, i) => (
              <>
                <li key={`aaa${i}`}>
                  <a href="#" className={`${curr === x && "active"}`}>
                    {x}
                  </a>
                </li>
              </>
            ))}
          </>
        )} */}
        {/* <li className="d-none d-sm-block">
          <a href="#">2</a>
        </li>
        <li className="d-none d-sm-block">
          <a href="#">3</a>
        </li>
        <li>
          <a href="#" className="dot">
            ...
          </a>
        </li>
        <li>
          <a href="#">12</a>
        </li> */}
        {curr < len ? (
          <li>
            <a href="#" className="active">
              Next <i className="fa-solid fa-angle-right ms-2"></i>{" "}
            </a>
          </li>
        ) : (
          <li>
            <a href="#">
              Next <i className="fa-solid fa-angle-right ms-2"></i>{" "}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
