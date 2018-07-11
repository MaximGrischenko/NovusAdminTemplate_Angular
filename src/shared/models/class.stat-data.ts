export class StatisticData {

  users: string;
  newUsers: number;
  orders: number;
  newOrders: number;
  visits: number;
  newVisits: number;
  balance: string;

  constructor(users: string, newUsers: number, orders: number, newOrders: number, visits: number, newVisits: number, balance: string) {

    this.users = users;
    this.newUsers = newUsers;
    this.orders = orders;
    this.newOrders = newOrders;
    this.visits = visits;
    this.newVisits = newVisits;
    this.balance = balance;

  }
}

