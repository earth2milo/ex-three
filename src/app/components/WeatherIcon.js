"use-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faBolt,
faCloud,
faUmbrella,
faSnowflake,
faSun,
} from "@fortawesome/free-solid-svg-icons";
const WeatherIcon = ({weatherType}) => {
    switch (weatherType) {
        case "Clouds":
        return <FontAwesomeIcon icon={faCloud} />;
        case "Rain":
        return <FontAwesomeIcon icon={faUmbrella} />;
        case "Snow":
        return <FontAwesomeIcon icon={faSnowflake} />;
        case "Sunny":
        return <FontAwesomeIcon icon={faSun} />;
        case "Thunder":
        return <FontAwesomeIcon icon={faBolt} />;
        default:
    return <div></div>;
    }
};

export default WeatherIcon;