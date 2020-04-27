import ISigninUseCase from './i_signin_use-case';
import { IUserDto } from './i_user_dto';
import IUserReadOnlyRepository from '../repositories/i_user_read_only_repository';
import User from '../../domain/user';

export default class SigninUsecase implements ISigninUseCase {
    private userReadOnlyRepository: IUserReadOnlyRepository;
    constructor(userReadOnlyRepository: IUserReadOnlyRepository) {
        this.userReadOnlyRepository = userReadOnlyRepository;
    }
    public async signin(userDto: IUserDto): Promise<IUserDto> {
        let user = new User(
            userDto.id,
             userDto.name, 
             userDto.email, 
             userDto.password, 
             userDto.type
             );
             user = await this.userReadOnlyRepository.fetch(user);
             const foundUserDto = user;
             return foundUserDto;

    }
   
}