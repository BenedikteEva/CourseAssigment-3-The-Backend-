
import React, { Component } from 'react';



export default class foodType extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const categories = ["fastfood", "family", "local", "gourmet", "asian"]
return (

<form>
  <h6>
    Type:  </h6>

    fastfood
    <input id="checkBox" type="checkbox" name="FastFood" />
    family
    <input id="checkBox" type="checkbox" name="family" />
  

</form>
)
    }}