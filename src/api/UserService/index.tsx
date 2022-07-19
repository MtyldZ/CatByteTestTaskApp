import {User} from '../../models/user.model';

type UserResponseType = {[key: string]: any} & User;

type FetchUsersType = {users: UserResponseType[]};

export class UserService {
  static fetchUsers() {
    function mapperFunction(userData: UserResponseType): User {
      const {id, firstName, lastName, age, image, company} = userData;
      return {
        id,
        firstName,
        lastName,
        age,
        image,
        company,
      };
    }

    return fetch('https://dummyjson.com/users')
      .then(r => r.json())
      .then((response: FetchUsersType) => {
        return response.users.map(mapperFunction);
      });
  }
}
