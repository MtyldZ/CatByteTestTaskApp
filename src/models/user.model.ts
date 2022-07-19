export interface User {
  firstName: string;
  lastName: string;
  age: number;
  image: string;
  company: {
    address: {
      address: string;
      city: string;
      postalCode: string;
      state: string;
    };
  };
}
