import IUserReadOnlyRepository from '../application/repositories/i_user_read_only_repository';
import User from '../domain/user';
import { injectable } from 'inversify';

@injectable()
export default class UserRepository implements IUserReadOnlyRepository {
   public async fetch(user:User): Promise<User> {
        throw new Error("Method not implemented.");
    }

}