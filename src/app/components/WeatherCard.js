"use-client";

import styles from "./WeatherCard.module.css";
import WeatherIcon from "./WeatherIcon";

const WeatherCard = ({
cityName,
weatherType,
currentTemperature,
highTemperature,
lowTemperature,
cloudiness,
humidity,
windSpeed,
}) => ( 
<div className={styles.WeatherCardWrapper}
    style={{ backgroundColor: `rgba(0,0,0,.${cloudiness}` }}

    >
    <div className={styles.WeatherCardImage}> 
        <WeatherIcon weatherType={weatherType}/>
        </div>
    <div className={styles.WeatherCardDetails}>
    <h2>{cityName}</h2>
    <p>Current Temperature: {currentTemperature}</p>
    <p>High Temperature: {highTemperature}</p>
    <p>Low Temperature: {lowTemperature}</p>
    <p>Cloudiness: {cloudiness}</p>
    <p>Humidity: {humidity}</p>
    <p>Wind Speed: {windSpeed}</p>
    </div>
</div>
);

export default WeatherCard;