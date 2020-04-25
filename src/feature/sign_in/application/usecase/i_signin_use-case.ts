import {IUserDto} from "./i_user_dto";

export default interface ISigninUseCase{
   signin(userDto:IUserDto): Promise<IUserDto>;
}