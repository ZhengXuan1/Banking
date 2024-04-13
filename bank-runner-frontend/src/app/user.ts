export interface User {
  id: number;
  fname: string;
  middleInit: string;
  lname: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  ssNum: string;
  uname: string;
  email: string;
  pass: string;
  role: string;
}

export interface notes {
  clientId: number;
  clientName: string,
  email: string;
  description: string;
  accNum: number;
  amount: number;
  id: number;
}
