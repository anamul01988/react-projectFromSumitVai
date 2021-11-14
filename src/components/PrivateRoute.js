import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) { //Comonent file er 1st letter capital hote hoy tai small theke capital a convert kore nilam
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to="/login" />
  );
}