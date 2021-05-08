import { withRouter } from "react-router";

function Test(props) {
    return (
      <div>
        Test Page
        <button onClick={() => props.history.push('/')} >go to home</button>
      </div>
    );
  }
  
  export default withRouter(Test);