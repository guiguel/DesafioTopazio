class ReservaService {

    constructor() { }
    processarDados(data) {
        return this.limpaCampos(data);
    }
  
    limpaCampos = (dados) => {
        if (typeof dados === 'object') {
            if (Array.isArray(dados)) {           
                return dados.filter((item) => item !== "" && item !== "#").map(this.limpaCampos.bind(this));
            } else {
                // Remove campos vazios ou com apenas "#"
                const resultado = {};
                for (const j in dados) {
                    if (dados[j] !== "" && dados[j] !== "#") {
                        resultado[j] = this.limpaCampos(dados[j]);
                    }
                }
                return resultado;
            }
        }
        return dados;
    };
}
  
module.exports = ReservaService;
  