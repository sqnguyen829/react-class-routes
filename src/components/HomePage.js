import { withRouter } from "react-router";

function HomePage(props) {
    return (
      <div>
        Home
        <button onClick={() => props.history.push('/about')}>about page</button>
        <button onClick={() => props.history.push('/test')}>test page</button>
      </div>
    );
  }
  
  export default withRouter(HomePage);