import {User} from '../../models/user.model';

type UserResponseType = {[key: string]: any} & User;

type FetchUsersType = {users: UserResponseType[]};

export class UserService {
  static fetchUsers() {
    function mapperFunction(userData: UserResponseType): User {
      const {
        firstName,
        lastName,
        age,
        image,
        company: {
          address: {address, city, postalCode, state},
        },
      } = userData;
      return {
        firstName,
        lastName,
        age,
        image,
        company: {
          address: {
            address,
            city,
            postalCode,
            state,
          },
        },
      };
    }

    return fetch('https://dummyjson.com/users')
      .then(r => r.json())
      .then((response: FetchUsersType) => {
        return response.users.map(mapperFunction);
      })
      .catch(err => {
        console.error(err);
        return [];
      });
  }
}
