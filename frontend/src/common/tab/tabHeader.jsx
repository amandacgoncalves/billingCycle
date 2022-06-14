import React, { Component } from "react";

class TabHeader extends Component {
  render() {
    return (
      <li>
        <a href='javascript:;' data-toggle="tab" data-target={this.props.target}></a>
        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
      </li>
    );
  }
}

export default TabHeader