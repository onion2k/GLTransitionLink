import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";

let transitionTime = 1000;

export default class GLTransitionLink extends React.Component {
  constructor(props) {
    super(props);
  }

  exitFunc() {
    this.props.setTransition("exit");
  }

  entryFunc() {
    this.props.setTransition("entry");
  }

  render() {
    return (
      <TransitionLink
        exit={{
          trigger: () => {
            this.exitFunc();
          },
          delay: 0,
          length: transitionTime / 1000
        }}
        entry={{
          delay: transitionTime / 1000,
          length: transitionTime / 1000,
          trigger: () => {
            this.entryFunc();
          }
        }}
        to={this.props.to}
      >
        {this.props.children}
      </TransitionLink>
    );
  }
}
