export const ROUTES = {
  main: {
    path: '/',
    label: 'Главная',
  },
  collections: {
    path: '/collections',
    label: 'Коллекции',
    children: {
      sport: {
        path: '/collections/sport',
        label: 'Спортивная',
      },
      junior: {
        path: '/collections/junior',
        label: 'Junior',
      },
      base: {
        path: '/collections/base',
        label: 'Базовая',
      },
    },
  },
  clothes: {
    path: '/catalog',
    label: 'Одежда',
  },
  accesories: {
    path: '/accesories',
    label: 'Аксессуары',
  },
  about: {
    path: '/about',
    label: 'Покупателям',
  },
  contact: {
    path: '/contact',
    label: 'Контакты',
  },
};
