const axios = require("axios")

const getCord = async (req,res,next) => {
    const { street, city, state } = req.body
    axios.get(`https://api.mapbox.com/search/geocode/v6/forward?q=${street},${city}-${state}&country=BR&access_token=${process.env.MAP_BOX_SCRET_KEY}`)
    .then(response => {

        const search = response.data.features[0].properties
        const corde = search.coordinates

        return res.status(200).json({msg: "Local encontrado", results: corde, state: 200})
    }).catch(error => {
        return res.status(200).json({msg: "Algo deu errado", results: error, state: 200})
    })
}

module.exports = {getCord}