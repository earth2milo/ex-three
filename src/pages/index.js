import "../app/globals.css";
import weatherCard from "@/app/components/weatherCard";


// const WEATHER_APP_API_KEY =`process.env.WEATHER_APP_API_KEY`;
// const OPEN_WEATHER_URL =`https://api.openweathermap.org/data/2.5/weather?q=Bostonn&appid=${WEATHER_APP_API_KEY}`;

export async function getStaticProps() {
    const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=${process.env.WEATHER_APP_API_KEY}`
    );
    const weatherData = await res.json();

    return {
        props: {
            weatherData,
        },
    };
}


export default function Home({weatherData}) {
console.log(weatherData);
    return (
        <main>
            <h1> Weather App </h1>
            <weatherCard 
            cityName={weatherData.name}
            weatherType={weatherData.weather[0].main}
/>
        </main>
    );
}