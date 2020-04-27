import User from '../../domain/user';

export default interface IUserReadOnlyRepository{
    fetch(user:User):Promise<User>;
}