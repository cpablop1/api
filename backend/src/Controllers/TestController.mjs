'use strict'
export default class TestController{
    constructor(){

    }
    test(request, response){
        console.log('Controller Test....');
        response.status(200).json({
            ok: true,
            status: 200,
            message: 'Controller Test...'
        });
    }
}