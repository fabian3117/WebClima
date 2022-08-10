import React, { Component, useEffect, useState } from 'react';

export default class Welcome extends Component {

    constructor(props) {
        super(props);
        console.log("ENTRAMOS CONSTRUCTOR");
      }

    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }