import { withRouter } from "react-router";
import ChildRoute from "./ChildRoute"
function About(props) {
    return (
      <div>
          <button onClick={()=> props.handleHomePageClick()}>
              homePage
          </button>
          <button onClick={() => props.history.push('/test')}> test page </button>
          <ChildRoute/>
      </div>
    );
  }
  
  export default withRouter(About);