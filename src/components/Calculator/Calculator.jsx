import React from "react";
// Boiling verdict
import BoilingVerdict from "../../helpers/BoilingVerdict/BoilingVerdict";

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {temp: ''}
    }

    handleChange = ({target: {value}}) => {
        this.setState({temp: value})
    }

    render() {
        const temperature = this.state.temp

        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}

export default Calculator