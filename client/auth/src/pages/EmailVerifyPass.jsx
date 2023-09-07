import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const EmailVerifyPass = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = useParams();
  const [uuid] = useState(params.uuid);
  const [token] = useState(params.token);
  const [status] = useState(params.status);
  const [from] = useState(location.state?.from?.pathname);


  const Push = () => {
    navigate(`/verify`, { state: { from: location } });
  };

  useEffect(() => {
    Push();
  }, []);

  return (
    <div style={{ marginLeft: "5px", marginTop: "2px" }}>
      redirecting...
    </div>
  );
};

export default EmailVerifyPass;
