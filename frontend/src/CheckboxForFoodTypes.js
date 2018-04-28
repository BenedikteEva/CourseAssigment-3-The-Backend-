import React, { Component } from 'react';
export default class foodType extends Component {
    
    render() {
        
        return (

            <form>

                Choose :
             
                Fastfood
                    <input id="checkBox" type="checkbox" name="fastfood" />
                Family
                    <input id="checkBox" type="checkbox" name="family" />
                Local
                    <input id="checkBox" type="checkbox" name="local" />
                Gourmet
                    <input id="checkBox" type="checkbox" name="gourmet" />
                Asian
                    <input id="checkBox" type="checkbox" name="asian" />
            </form>
        )
    }
}