const Model = ({ id, title, message, btnMsg, func }) => {
  // if (element) {
  const onClick = () => {
      document.getElementById(`model${id}`).click();
      func();
  };

  return (
    <>
      {/* <!-- Modal --> */}
      <div
        id={`model${id}`}
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        aria-labelledby={`model${id}Title`}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`model${id}Title`}>
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id={`model${id}`}
              ></button>
            </div>
            <div className="modal-body">{message}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={onClick}
                className={`btn btn-primary model${id}`}
              >
                {btnMsg}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
