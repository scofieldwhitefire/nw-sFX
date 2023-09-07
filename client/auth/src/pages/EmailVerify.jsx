import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { EmailVerify as EV } from "../features/auth";

const EmailVerify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const params = useParams();
  const [uuid] = useState(params.uuid);
  const [token] = useState(params.token);
  const [status] = useState(params.status);

  const verify = async () => {
    const res = await dispatch(EV({ uuid, token }));
    if (res.meta.requestStatus === "rejected") {
      if (res.payload.detail === "") {
        navigate(`${location.pathname}/failed`);
      } else {
        navigate(`${location.pathname}/failed-${res.payload.detail}`);
      }
    } else {
      console.log(res.payload);
      if (res.payload === "verified") {
        navigate(`/`);
      } else {
        navigate(`${location.pathname}/success`);
      }
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <div style={{ marginLeft: "5px", marginTop: "2px" }}>redirecting...</div>
  );
};

export default EmailVerify;
