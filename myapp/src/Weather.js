import React, {useState} from 'react';
import './App.css';

function Weather(prop) {
    const [temp, setTemp] = useState('');
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');
    const [isReady, setReady] = useState(false);

    React.useEffect(() => {
        let path = `http://api.openweathermap.org/data/2.5/weather?q=${prop.city}&APPID=c36b03a963176b9a639859e6cf279299&units=metric`;
        console.log(path);
        fetch(path)
            .then(result => result.json())
            .then(json => {
                setTemp(json.main.temp);
                setDesc(json.weather[0].main);
                setIcon(json.weather[0].icon);
                setReady(true);
            })
            .catch(err => console.error(err))
    }, [])
    if (isReady) {
        return (
            <div className="App">
                <p>City: {prop.city} </p>
                <p>Temperature: {temp} °C</p>
                <p>Description: {desc}</p>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                     alt="Weather icon"/>
            </div>
        );
    } else {
        return <div>Loading...</div>
    }
}

export default Weather;