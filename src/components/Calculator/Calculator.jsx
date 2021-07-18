import React from "react";
import TemperatureInput from "../TemperatureInput/TemperatureInput";
import BoilingVerdict from "../../helpers/BoilingVerdict/BoilingVerdict";
import tryConvert from "../../helpers/tryConvert/tryConvert";
import {toCelsius, toFahrenheit} from "../../helpers/convertTemp/convertTemp";

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {scale: 'c', temp: ''}
    }

    handleCelsiusChange = (temperature) => {
        this.setState({scale: 'c', temp: temperature});
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({scale: 'f', temp: temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temp;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <>
                <TemperatureInput scale='c' temp={celsius} onTempChange={this.handleCelsiusChange} />
                <TemperatureInput scale='f' temp={fahrenheit} onTempChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </>
        )
    }
}

export default Calculator