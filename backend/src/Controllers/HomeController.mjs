'use stric'

export default class HomeController {
    constructor() {

    }
    home(request, response) {
        console.log('Test home...');
        response.status(200).json({
            ok: true,
            status: 200,
            message: 'Hello from home...'
        });
    }
    test(request, response) {
        console.log('Home controller, test function....');
        response.status(200).json({
            ok: true,
            status: 200,
            message: 'Home controller, test function...'
        });
    }
}