
// Remove elementos vazios ou com apenas "#"
// preciso validar se for objeto e para o caso de enviar um array
const limpaCampos = (dados) => {
    if (typeof dados === 'object') {
        if (Array.isArray(dados)) {        
            return dados.filter((item) => item !== "" && item !== "#").map(limpaCampos);
        } else {
            // Remove campos vazios ou com apenas "#"
            const resultado = {};
            for (const j in dados) {
                if (dados[j] !== "" && dados[j] !== "#") {
                    resultado[j] = limpaCampos(dados[j]);
                }
            }
            return resultado;
        }
    }
    return dados;
};
  
  const dadosEntrada = {
    "name": "",
    "rooms": ["", "01", "#", "02"],
    "age": "#",
    "gender": "M",
    "companies": {
      "name": "#",
      "document": "0000000000"
    }
  };
  
  const dadosSaida = limpaCampos(dadosEntrada);
  
  console.log(JSON.stringify(dadosSaida, null, 2));
  