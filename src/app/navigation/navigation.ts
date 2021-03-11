import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : '',
        type     : 'group',
        children : [
            {
                id       : 'coursole',
                title    : 'HOME',
                type     : 'item',
                icon     : 'home',
                url      : '/home',
               
            },
            {
                id       : 'about',
                title    : 'ABOUT ME',
                type     : 'item',
                icon     : 'perm_identity',
                url      : '/about',
               
            },
            {
                id       : 'career',
                title    : 'CAREER HIGHLIGHTS',
                type     : 'item',
                icon     : 'trending_up',
                url      : '/career',
               
            },
            {
                id       : 'gallery',
                title    : 'GALLERY',
                type     : 'item',
                icon     : 'collections',
                url      : '/gallery',
               
            },
            {
                id       : 'events',
                title    : 'EVENTS',
                type     : 'item',
                icon     : 'event',
                url      : '/events',
               
            },
            {
                id       : 'sponsors',
                title    : 'OUR SPONSOERS',
                type     : 'item',
                icon     : 'monetization_on',
                url      : '/sponsoers',
               
            },
            {
                id       : 'sponsorsme',
                title    : 'WHY SPONSOER ME',
                type     : 'item',
                icon     : 'attach_money',
                url      : '/sponsoerMe',
               
            },
            {
                id       : 'contactus',
                title    : 'CONTACT US',
                type     : 'item',
                icon     : 'mail_outline',
                url      : '/contact',
               
            }
        ]
    }
];
