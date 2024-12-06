const { celular } = require('./celular');

function descripcion(){
    console.log(`Celular: ${celular.marca},
        Modelo: ${celular.modelo},
        Tipo de producto: ${celular.tipodeproducto},
        Sistema operativo: ${celular.sistema},
        Memoria RAM: ${celular.memoriaRAM},
        Fecha: ${celular.fecha}`)
}

descripcion()

const agregardatos = {
    ...celular, 
    bateria:'5000 mAh',
    camara: '108 MP'
}

console.log('Nuevos datos agregados', agregardatos)

const mostraralgunosdatos = (Callback) => {
    console.log('Datos actualizados..')
    Callback()
}

const descripcioncelular = () => {
`Celular: ${celular.marca},
    Modelo: ${celular.modelo},
    Tipo de producto: ${celular.tipodeproducto},
    Fecha: ${celular.fecha}`
}

mostraralgunosdatos(descripcioncelular)