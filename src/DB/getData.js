export const getData = async (lat, lon) => {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${lat}&longitude=${lon}&timezone=America/Argentina/Jujuy`)
    const data = await response.json()
    return data
}

export const getCities = async (cities) => {
    let cityList = []

    for (let i = 0; i < cities.length; i++) {
        const city = await getData(cities[i].lat, cities[i].lon)
        const clima = {
            id: cities[i].id,
            cityName: cities[i].name,
            image: cities[i].image,
            latitude: city.latitude,
            longitude: city.longitude,
        }
        const {id, cityName, image, latitude, longitude} = clima
        const {current_weather} = city
        cityList.push({id, cityName, image, latitude, longitude, current_weather})
    }
    return cityList
}