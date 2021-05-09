import { withRouter } from "react-router";
// import Hello from './Hello'
function ChildRoute(props) {
    return (
      <div>
          Child route
          <button onClick={() => props.history.push('/test')}> test page </button>
      </div>
    );
  }
  
  export default withRouter(ChildRoute);