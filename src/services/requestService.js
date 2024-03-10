class RequestService {
 
    constructor(request) {
        this.request = request;
    }

    getBody() {
        return this.request.body;
    }
}
  
module.exports = RequestService;
  