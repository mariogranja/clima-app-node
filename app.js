
const lugar=require('./lugar/lugar')
const clima=require('./clima/clima')


const argv=require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).argv;




//const lug=lugar.gerLugarLatLng(argv.direccion)
    //.then(resp=>console.log(resp));


//const cli=clima.getClima(lug.lat,lug.lng)
 //   .then(resp=>console.log(resp))
 //   .catch(console.log);


const getInfo = async(direccion) => {

    
    try {
        const lug = await lugar.gerLugarLatLng(direccion);
        const cli = await clima.getClima(lug.lat, lug.lng);

       return `El clima de ${lug.direccion} es de ${cli}`;

    } catch (error) {
        return `No se pudo determinar el clima de ${lug.direccion}`;
    }



}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)