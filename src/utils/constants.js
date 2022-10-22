// const BASE_URL = 'https://api.diploma.students.nomorepartiesxyz.ru';
const BASE_URL = 'http://localhost:3000';
const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const DEVICE_PARAMS = {
    desktop: {
      width: 1179,
      cards: {
        total: 12,
        more: 3,
      },
    },
    tablet: {
      width: 720,
      cards: {
        total: 8,
        more: 2,
      },
    },
    mobile: {
      width: 596,
      cards: {
        total: 5,
        more: 2,
      },
    },
  };
  
export { BASE_URL, MOVIES_URL, DEVICE_PARAMS  };
