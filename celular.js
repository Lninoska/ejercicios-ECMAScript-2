const _ = require('lodash');
const moment = require('moment')

const celular = {
    marca: 'Samsung',
    modelo: "Galaxy A35",
    tipodeproducto: 'Smartphone',
    sistema: 'Android',
    memoriaRAM: '8 GB',
    fecha: moment().format('YYYY-MM-DD')
}

module.exports = { celular }