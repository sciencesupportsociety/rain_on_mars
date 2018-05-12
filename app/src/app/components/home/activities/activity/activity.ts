export interface Activity {
  id: string;
  name: string;
  description: string;
  image: string;
  venues: string[];
  featured?: boolean;
  open?: boolean;
  done?: boolean;
  survey?:boolean;
}

export const dummyActivities: Activity[] = [
  {
    id: 'x',
    featured: true,
    done: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNfjkWRPhhz5unUiYca1pP10-AILgQRTqvd8ImUahruUfbUDq',
    name: 'Bebe 2018 Karinas festival',
    venues: ['IDEA HOUSE stends'],
    open: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'Quisque ut venenatis leo, vel placerat sapien. Donec molestie in mauris ' +
    'a pellentesque. Sed congue vehicula erat eget rhoncus. Duis turpis mi, ' +
    'varius vitae viverra vel, ultrices eu ante.',
  },
  {
    id: 'xx',
    featured: false,
    done: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJlYNf0uF9fksXQxPWMfw9c_iT9JoWUHOoHdZ4MfcM-OZKpKcuw',
    name: 'Ceļojums kosmosā',
    venues: ['TRAPPIST-1 d'],
    open: false,
    description: 'Jupiter\'s moon Europa has a crust made up of blocks, which' +
    'are thought to have broken apart and rafted into new positions, as shown' +
    'in the image on the left. These features are the best geologic evidence ' +
    'to date that Europa may have had a subsurface ocean at some time in its past.',
  },
  {
    id: 'xxx',
    featured: true,
    done: true,
    image: 'http://lawofficer.com/wp-content/uploads/2017/08/eclispse.jpg',
    name: 'Eclipse',
    venues: ['IDEA HOUSE stends'],
    open: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'Quisque ut venenatis leo, vel placerat sapien. Donec molestie in mauris ' +
    'a pellentesque. Sed congue vehicula erat eget rhoncus. Duis turpis mi, ' +
    'varius vitae viverra vel, ultrices eu ante.',
  },
  {
    id: 'xxx',
    featured: false,
    done: false,
    image: 'https://sos.noaa.gov/ftp_mirror/astronomy/trappist/Trappist_1C_Shadow/media/thumbnail_small.jpg',
    name: 'LOOP 2018 biļete',
    venues: ['IDEA HOUSE stends'],
    open: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'Quisque ut venenatis leo, vel placerat sapien. Donec molestie in mauris ' +
    'a pellentesque. Sed congue vehicula erat eget rhoncus. Duis turpis mi, ' +
    'varius vitae viverra vel, ultrices eu ante.',
  },
];
