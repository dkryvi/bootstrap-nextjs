/*
    Map for using typography variants:

    h1 -> 38px
    h2 -> 35px
    h3 -> 32px
    h4 -> 21px
    body1 -> 14px
    body2 -> 14px
    subtitle1 -> 16px
    caption -> 12px

*/

const fontFamily = 'Maven Pro';

export default {
  fontFamily: `${fontFamily}, "Lucida Grande", sans-serif`,
  h1: {
    fontSize: '2.4rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '2.2rem',
    fontWeight: 700,
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  h4: {
    fontSize: '1.35rem',
    fontWeight: 700,
  },
  body1: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.3,
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.3,
  },
  subtitle1: {
    fontSize: '1rem',
  },
  caption: {
    fontSize: '0.8rem',
  },
};
