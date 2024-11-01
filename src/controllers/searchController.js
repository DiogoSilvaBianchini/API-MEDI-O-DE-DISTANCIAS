const axios = require("axios")
const getDistance = require("../utils/getDistance")
const getCorde = require("../utils/getCorde")

const getCord = async (req, res, next) => {
    const { street, city, state } = req.body
    const {longitude, latitude} = await getCorde(street, city, state )
    next({longitude, latitude})
}

const getDeliveryDistance = async (corde, req, res, next) => {    
    try {
        const {km, minutes} = await getDistance(corde.longitude, corde.latitude)
        return res.status(200).json({msg: "Percurso encontrado com sucesso!", results: {distance: km, duration: minutes}, status: 200})
    } catch (error) {
        return res.status(500).json({msg: "Algo deu errado!", results: error, status: 500})
    }
}

const calculateShipping = async (corde, req, res, next) => {
    const {km} = await getDistance(corde.longitude, corde.latitude)
    
    const shippingCostPerKm = 1.50

    const deliveryCost = (Math.floor(Number(km)) * shippingCostPerKm).toFixed(2)

    return res.status(200).json({msg: "Calculo gerado com sucesso!", results: {
        price: {
            deliveryCost,
            distance: km
        }
    }, status: 200})
}

module.exports = {
    getCord,
    getDeliveryDistance,
    calculateShipping
}