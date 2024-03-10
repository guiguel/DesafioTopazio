const RequestService = require('../services/requestService');
const ResponseService = require('../services/responseService');
const ReservaService = require('../services/reservaService');

const reservaService = new ReservaService();

const  getAll = async (req, res) => {
    try {        
        const requestService = new RequestService(req);
        const requestBody = requestService.getBody();
    
        //ReservaService processar os dados
        const processedData = await reservaService.processarDados(requestBody);
        
        // ResponseService enviando uma resposta JSON
        const responseService = new ResponseService(res);
        responseService.sendJson(processedData);
    } catch (error) {
        console.error('Erro no reservaController:', error);
        const responseService = new ResponseService(res);
        responseService.sendJson({ error: 'Erro durante o processamento' }, 500);  
    }
};

module.exports = {
    getAll
};
