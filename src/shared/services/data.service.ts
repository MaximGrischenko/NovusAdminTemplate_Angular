import {InMemoryDbService} from 'angular-in-memory-web-api';

export class DataService implements InMemoryDbService {
  createDb() {
    const admin =
      {
        firstName: 'Michael',
        lastName: 'Williams',
        emailAdress: '@williams',
        urlAvatar: '../../../../assets/images/admin-icon.png'
      };

    const statistic = {
      users: '218k',
      newUsers: 14,
      orders: 1857,
      newOrders: 27,
      visits: 719,
      newVisits: 109,
      balance: '$26.425'
    };

    const messages = [
      {
        firstName: 'John',
        lastName: 'Stone',
        userIp: 'IP: 172.10.56.3',
        urlAvatar: '../../../../../assets/images/user-avatar1.png',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
        status: true,
        time: '3 hours ago'
      },
      {
        firstName: 'Anna',
        lastName: 'Anderson',
        userIp: 'IP: 172.10.56.3',
        urlAvatar: '../../../../../assets/images/user-avatar2.png',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
        status: false,
        time: '6 hours ago'
      },
      {
        firstName: 'John',
        lastName: 'Stone',
        userIp: 'IP: 172.10.56.3',
        urlAvatar: '../../../../../assets/images/user-avatar3.png',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
        status: true,
        time: '2:36 pm'
      },
    ];

    return {admin, statistic, messages};
  }
}
