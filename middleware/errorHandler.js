const {constants} = require("../constants")
const errorHandler = (err, req, res, next) => {
    //if we have status code, we are going to pass that status code, else 500
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode){
        case constants.VALIDATION_ERROR:
            res.json({title: "Not Found", 
                        message: err.message, 
                        stackTrace:err.stack});
            break;
        case constants.NOT_FOUND:
            res.json({title: "Validation Failed", 
                        message: err.message, 
                        stackTrace:err.stack});
            break
        case constants.UNAUTHORISED:
            res.json({title: "Unauthorised", 
                        message: err.message, 
                        stackTrace:err.stack});
            break;
        case constants.FORBIDDEN:
            res.json({title: "Forbidden", 
                        message: err.message, 
                        stackTrace:err.stack});
                break;
        case constants.SERVER_ERROR:
            res.json({title: "Server error", 
                        message: err.message, 
                        stackTrace:err.stack});
                
        default:
            console.log("No error, all good.")
            break;
    }
};

module.exports = errorHandler;

