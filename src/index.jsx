import * as React from "react";
import * as ReactDOM from 'react-dom';

const AppContainer=()=>{
    return(
        <div>Main app content new</div>
    )
}


window.App=(container) => {
    // Rendering the component
    ReactDOM.render(
      <AppContainer/>,
      container
    );
  };
  