import {IMAGEURLREGEX, PRICEREGEX} from '../constants/validationRules';

export const validationConfig = {
  title: {
    required: {
      rule: true,
      error: 'Title is required. ',
    },
    minLength: {
      rule: 2,
      error: 'Title is too short. ',
    },
    maxLength: {
      rule: 20,
      error: 'Title is too long. ',
    },
  },
  imageUrl: {
    required: {
      rule: true,
      error: 'Image url is required. ',
    },
    regex: {
      rule: IMAGEURLREGEX,
      error: 'Image url is invalid. ',
    },
  },
  price: {
    required: {
      rule: true,
      error: 'Price is required. ',
    },
    regex: {
      rule: PRICEREGEX,
      error: 'Price is invalid. ',
    },
  },
  description: {
    required: {
      rule: true,
      error: 'Description is required. ',
    },
    minLength: {
      rule: 6,
      error: 'Description is too short. ',
    },
    maxLength: {
      rule: 100,
      error: 'Description is too long. ',
    },
  },
};
