import { withRouter } from "react-router";

function About(props) {
    return (
      <div>
          <button onClick={()=> props.handleHomePageClick()}>
              homePage
          </button>
          <button onClick={() => props.history.push('/test')}> test page </button>
      </div>
    );
  }
  
  export default withRouter(About);