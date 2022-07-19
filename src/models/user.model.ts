export interface User {
  id: number;
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
    department: string;
    name: string;
    title: string;
  };
}
