
const {locationData} = require('./mockData')

const getLocation = (parent, args, context, info) =>{
    const { place } = args;
    return locationData.filter(locationInfo => locationInfo.place == place);
}

module.exports ={
    getLocation
}