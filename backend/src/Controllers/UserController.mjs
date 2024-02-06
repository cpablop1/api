'use stric'
import User from "../Models/Models/Authentication/User.mjs";

export default class UserController {
    constructor() { }
    async create(request, response) {
        console.log('Create user...');
        await User.sync();
        const USER = await User.create({
            name: request.body.name,
            email: request.body.email
        });
        console.log(USER.error);
        response.status(200).json({
            ok: true,
            status: 200,
            message: USER
        });
    }
}