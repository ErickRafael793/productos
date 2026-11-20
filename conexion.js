var sequelize = require('sequelize')
var productoModelo = require('./models/producto')

//conexion con la bd
/*
const conexion = new sequelize('productos','root','pogg12345',{
    host: 'localhost',
    port:'3307',
    dialect: 'mysql'
});
*/

//conexion remota
const conexion = new sequelize('productos','2TK2QUmWsB6DbMV.root','A48Ca7JHc5hnkrFw',{
    host: 'gateway01.us-east-1.prod.aws.tidbcloud.com',
    port:'4000',
    dialect: 'mysql',
    dialectOptions: {
        ssl:{
            minVersion: "TLSv1.2",
            rejectUnauthorized: true
        }
    }
});
const producto = productoModelo(conexion);

conexion.sync({force:false})
.then (() => {
    console.log('Conectado exitosamente')
})
.catch((e) => {
    console.log('Error en la conexion: '+e)

});

module.exports = {
    producto
}