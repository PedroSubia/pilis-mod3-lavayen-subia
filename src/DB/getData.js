


export const getData = async (lat, lon) => {
    const data = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${lat}&longitude=${lon}&timezone=America/Argentina/Jujuy`)
    return data.json()
}

// export const getData = (lat, lon) => {
//     fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${lat}&longitude=${lon}&timezone=America/Argentina/Jujuy`)
//         .then(resp => resp.json())
//         .then(resp => {
//             const clima = {
//                 latitude: resp.latitude,
//                 longitud: resp.longitude,
//                 temperatura: resp.current_weather.temperature,
//                 velocidadviento: resp.current_weather.windspeed

//             }
//             console.log(clima)
//             return clima
//         })

// }
