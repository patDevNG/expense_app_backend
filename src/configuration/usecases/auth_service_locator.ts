import SigninUsecase from '@pbb/feature/sign_in/application/usecase/signin_usecase_impl';
import {injectable, inject} from "inversify";
import { TYPE } from 'inversify-express-utils';
import IUserReadOnlyRepository from '@pbb/feature/sign_in/application/repositories/i_user_read_only_repository';
import { TYPES } from '@pbb/constants/types';

@injectable()
export default class AuthServiceLocator{

    constructor( @inject(TYPES.IUserReadOnlyRepository) 
    private readRepository: IUserReadOnlyRepository){}
    public GetSignInUsecase(){
        return new SigninUsecase(this.readRepository);
    }
}