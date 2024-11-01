const axios = require("axios")

const getCorde = async (street, city, state) => {
    const request = await axios.get(`https://api.mapbox.com/search/geocode/v6/forward?q=${street},${city}-${state}&country=BR&access_token=${process.env.MAP_BOX_SCRET_KEY}`)
    const {longitude, latitude} = request.data.features[0].properties.coordinates
    return {longitude, latitude}
}

module.exports = getCorde