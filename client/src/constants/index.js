import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'Home',
    imgUrl: dashboard,
    link: '/home',
    id: 0
  },
  {
    name: 'Start campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
    id: 1
  },
  {
    name: 'Edit campaign',
    imgUrl: payment,
    link: '/profile',
    disabled: false,
    id: 2
  },
  {
    name: 'Withdraw',
    imgUrl: withdraw,
    link: '/profile',
    disabled: false,
    id: 3
  },
  {
    name: 'Profile',
    imgUrl: profile,
    link: '/profile',
    id: 4
  },
  {
    name: 'Logout',
    imgUrl: logout,
    link: '/',
    disabled: false,
    id: 5
  },
];

export const adminNavlinks=[
  {
    name: 'All campaigns',
    imgUrl: dashboard,
    link: '/admindashboard',
    id: 0
  },
  {
    name: 'Users',
    imgUrl: profile,
    link: '/adminapproval',
    id: 1
  }
];