import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Product',
      links: [
        {
          text: 'Education',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Consultant',
          href: getPermalink('/homes/startup'),
        },
      ],
    },
    {
      text: 'Team',
      links: [
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      
      links: [
      
       
        
       
      
      ],
    },
    {
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Education', href: '#' },
        { text: 'Consultant', href: '#' },
      ],
    },
    {
      title: 'Team',
      links: [
        { text: 'About us', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/cyberhouse.id/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
};
