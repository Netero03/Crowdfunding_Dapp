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
    id: 2
  },
  {
    name: 'Withdraw',
    imgUrl: withdraw,
    link: '/profile',
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
    name: 'Approve Users',
    imgUrl: profile,
    link: '/adminapproval',
    id: 1
  },
  {
    name: 'Logout',
    imgUrl: logout,
    link: '/',
    disabled: false,
    id: 2
  }
];

export const userNavlinks=[
  {
    name: 'Home',
    imgUrl: dashboard,
    link: '/userhome',
    id: 0
  },
  {
    name: 'Profile',
    imgUrl: profile,
    link: '/userprofile',
    disabled: false,
    id: 1
  },
  {
    name: 'Blog',
    imgUrl: createCampaign,
    link: '/blog',
    disabled: false,
    id: 2
  },
  {
    name: 'Help Center',
    imgUrl: payment,
    link: '/helpcentre',
    disabled: false,
    id: 3
  },
  {
    name: 'Logout',
    imgUrl: logout,
    link: '/',
    disabled: false,
    id: 4
  },
]