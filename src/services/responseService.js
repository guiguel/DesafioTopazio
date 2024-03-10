class ResponseService {
   
    constructor(response) {
        this.response = response;
    }
    
    sendJson(data, statusCode = 200) {
        this.response.status(statusCode).json(data);
    }
}
  
module.exports = ResponseService;
  