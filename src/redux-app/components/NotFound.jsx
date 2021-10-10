import { Button } from "antd";
import { NoRouteFoundDiv } from "./Style";

export const NotFound = ({ history }) => {
  return (
    <NoRouteFoundDiv>
      <p>No Route Found</p>
      <Button type="primary" onClick={() => history.push('/')}>Go back to home page!</Button>
    </NoRouteFoundDiv>
  );
};
