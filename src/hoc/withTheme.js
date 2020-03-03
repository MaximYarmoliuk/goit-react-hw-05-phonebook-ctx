import React from "react";
import ThemeContext from "../contexts/ThemeContext/ThemeContext";

const withTheme = WrappedComponent => {
  return function WithTheme(props) {
    return (
      <ThemeContext.Consumer>
        {theme => <WrappedComponent {...props} style={{color: theme.config.fontColor, background: theme.config.bodybg}} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;
