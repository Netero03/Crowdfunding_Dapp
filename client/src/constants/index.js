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
    link: '/home/create-campaign',
    id: 1
  },
  {
    name: 'Edit campaign',
    imgUrl: payment,
    link: '/home/profile',
    id: 2
  },
  {
    name: 'Withdraw',
    imgUrl: withdraw,
    link: '/home/profile',
    id: 3
  },
  {
    name: 'Profile',
    imgUrl: profile,
    link: '/home/profile',
    id: 4
  },
  {
    name: 'Blog',
    imgUrl: createCampaign,
    link: '/home/blogforall',
    disabled: false,
    id: 5
  },
  {
    name: 'Logout',
    imgUrl: logout,
    link: '/',
    disabled: false,
    id: 6
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
    link: '/admindashboard/users',
    id: 1
  },
  {
    name: 'Organisations',
    imgUrl: profile,
    link: '/admindashboard/organisations',
    id: 2
  },
  {
    name: 'UserRequests',
    imgUrl: profile,
    link: '/admindashboard/user-requests',
    id: 3
  },
  {
    name: 'Logout',
    imgUrl: logout,
    link: '/',
    disabled: false,
    id: 4
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
    link: '/userhome/userprofile',
    disabled: false,
    id: 1
  },
  {
    name: 'Ask For Approval',
    imgUrl: payment,
    link: '/askforapproval',
    disabled: false,
    id: 2
  },
  {
    name: 'Blog',
    imgUrl: createCampaign,
    link: '/userhome/blog',
    disabled: false,
    id: 3
  },
  {
    name: 'Help Center',
    imgUrl: payment,
    link: '/userhome/helpcentre',
    disabled: false,
    id: 4
  },
  {
    name: 'Logout',
    imgUrl: logout,
    link: '/',
    disabled: false,
    id: 5
  },
]