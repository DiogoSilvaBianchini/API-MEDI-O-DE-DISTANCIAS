const axios = require("axios")

const getDistance = async (longitude, latitude) => {  
    const request = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/-47.440185%2C-23.506525%3B${longitude}%2C${latitude}?alternatives=true&geometries=geojson&language=pt&overview=full&steps=true&access_token=${process.env.MAP_BOX_SCRET_KEY}`)
    const {distance, duration} = request.data.routes[0]

    const km = Number((distance / 1000).toFixed(2))
    const minutes = Number((duration / 60).toFixed(2))

    return {km, minutes}
}


module.exports = getDistance