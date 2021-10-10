import { connect } from "react-redux";
import UserDetailsPage from "../components/UserDetailsPage";
import { logout } from "../actions/authActions";
import { usersListRequest } from "../actions/usersListActions";
import { singleUserDataRequest } from "../actions/singleUserActions";
import { addUserRequest } from "../actions/addUserActions";
import { editUserRequest } from "../actions/editUserActions";
import { deleteUserRequest } from "../actions/deleteUserActions";
import browserHistory from "../utils/history";

const mapStateToProps = state => ({
  usersData: state.user
})

const mapDispatchToProps = (dispatch) => ({
  requestLogout: () => dispatch(logout(browserHistory)),
  usersListRequest: () => dispatch(usersListRequest()),
  singleUserDataRequest: (id) => dispatch(singleUserDataRequest(id)),
  addUserRequest: (userData) => dispatch(addUserRequest(userData, browserHistory)),
  editUserRequest: (id, userData) => dispatch(editUserRequest(id, userData, browserHistory)),
  deleteUserRequest: (id) => dispatch(deleteUserRequest(id, browserHistory)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsPage);
