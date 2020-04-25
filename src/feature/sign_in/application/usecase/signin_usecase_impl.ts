import ISigninUseCase from './i_signin_use-case';
import  { IUserDto } from './i_user_dto';

export default class SigninUsecase implements ISigninUseCase{
   public async signin(userDto:IUserDto):Promise<IUserDto>{
       return null
   }

}