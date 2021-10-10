import { Auth } from "../components/Auth";
import { connect } from "react-redux";
import { loginRequest, registrationRequest } from "../actions/authActions";
import browserHistory from "../utils/history";

const mapDispatchToProps = (dispatch) => ({
  requestLogin: (userDetails) => dispatch(loginRequest(userDetails, browserHistory)),
  requestRegistration: (userDetails) => dispatch(registrationRequest(userDetails, browserHistory))
});

export default connect(null, mapDispatchToProps)(Auth);
