const datosBici = require('./datosBici');

const dhBici = {
  bicicletas: datosBici.bicicletas,
  buscarBici(id) {
    return this.bicicletas.find(bici => bici.id === id) || null;
  },
  venderBici(id) {
    const bicicleta = this.buscarBici(id);
    if (bicicleta) {
      bicicleta.vendida = 'si';
      return "bicicleta";
    }
    return 'Bicicleta no encontrada';
  },
  biciParaLaVenta() {
    return this.bicicletas.filter(bici => bici.vendida === 'no');
  },
  totalDeVentas() {
    return this.bicicletas.reduce((total, bici) => {
      return bici.vendida === 'si' ? total + bici.precio : total;
    }, 0);
  },
};

console.log(dhBici.buscarBici(2));
console.log(dhBici.venderBici(1));
console.log(dhBici.biciParaLaVenta(3));
console.log(dhBici.totalDeVentas(4));