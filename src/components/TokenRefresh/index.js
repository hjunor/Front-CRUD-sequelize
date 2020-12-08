import { getToken } from "../../helpers/account";
import { getTokenExpire } from "../../helpers/jwt";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getFreshToken } from "../../actions/AccountActions";

const TokenRefresh = ({ getFreshToken }) => {
  const TRESHHOLD = 30;
  const calculate = () => {
    const token = getToken();
    const expires = getTokenExpire(token);

    const secondsToExpire = expires - Date.now() / 1000;

    return secondsToExpire;
  };

  setInterval(calculate, 1000);

  useEffect(() => {
    const secondsToExpire = calculate() - TRESHHOLD;

    const id = setTimeout(getFreshToken, secondsToExpire * 1000);
    return () => clearTimeout(id);
  }, [getFreshToken]);

  return null;
};
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getFreshToken })(TokenRefresh);
