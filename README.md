npm install

npm start

Adding the usage of withRouter allow the other components to access the history of the routes that exist


withRouter

You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.import React from "react";


Important Note

withRouter does not subscribe to location changes like React Redux’s connect does for state changes. Instead, re-renders after location changes propagate out from the <Router> component. This means that withRouter does not re-render on route transitions unless its parent component re-renders.Static Methods and PropertiesAll non-react specific static methods and properties of the wrapped component are automatically copied to the "connected" component.