const axios = require("axios")

const getCord = async (req,res,next) => {
    const { street, city, state } = req.body
    axios.get(`https://api.mapbox.com/search/geocode/v6/forward?q=${street},${city}-${state}&country=BR&access_token=${process.env.MAP_BOX_SCRET_KEY}`)
    .then(response => {

        const search = response.data.features[0].properties
        const corde = search.coordinates

        next(corde)
    }).catch(error => {
        return res.status(500).json({msg: "Algo deu errado", results: error, state: 500})
    })
}

const getDistance = (corde,req,res,next) => {
    console.log(corde.longitude, corde.latitude)
    
    axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/-47.440185%2C-23.506525%3B${corde.longitude}%2C${corde.latitude}?alternatives=true&geometries=geojson&language=pt&overview=full&steps=true&access_token=${process.env.MAP_BOX_SCRET_KEY}`)
    .then(response => {
        const {distance, duration} = response.data.routes[0]
        
        const km = (distance / 1000).toFixed(2)
        const minutes = (duration / 60).toFixed(2)

        return res.status(200).json({msg: "Caminho encontrado!", results: {distance: km, duration: minutes}, status: 200})
    }).catch(error => {
        return res.status(500).json({msg: "Algo deu errado", results: error, state: 500})
    })
}


module.exports = {
    getCord,
    getDistance
}