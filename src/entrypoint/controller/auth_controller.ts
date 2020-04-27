import {controller, httpPost, interfaces, request,response} from "inversify-express-utils"
import ISigninUseCase from '@pbb/feature/sign_in/application/usecase/i_signin_use-case'
import { inject } from 'inversify';
import { TYPES } from '@pbb/constants/types';
import AuthServiceLocator from '@pbb/configuration/usecases/auth_service_locator';


@controller("/auth")
export default class AuthController implements interfaces.Controller{
    private readonly signInUseCase:ISigninUseCase;

    constructor(@inject(TYPES.AuthServiceLocator) serviceLocator:AuthServiceLocator){
        this.signInUseCase = serviceLocator.GetSignInUsecase();
    }
    
    @httpPost("/signin")
    public async signin(@request() req:Express.Request,@response() res:Express.Response ){}
}