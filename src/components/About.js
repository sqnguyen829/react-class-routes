function About(props) {
    return (
      <div>
          <button onClick={()=> props.handleHomePageClick()}>
              homePage
          </button>
      </div>
    );
  }
  
  export default About;