import React from "react";
// Scale names
import scaleNames from "../../data/scaleName.data";

class TemperatureInput extends React.Component {

    handleChange = (e) => {
        this.props.onTempChange(e.target.value)
    }

    render() {
        const temperature = this.props.temp
        const scale = this.props.scale

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}

export default TemperatureInput