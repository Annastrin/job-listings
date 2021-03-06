import {createUseStyles} from 'react-jss';
import {colors, media} from '../../styleguide';

const useStyles = createUseStyles({
  '@keyframes show': {
    from: {opacity: 0},
    to: {opacity: 1}
  },
  filter: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1110,
    minHeight: 72,
    margin: '-110px auto 38px',
    borderRadius: 5,
    padding: '10px 40px',
    backgroundColor: `${colors.White}`,
    animationName: '$show',
    animationDuration: '0.5s'
  },

  tags: {
    margin: '0 -7px'
  },

  clear: {
    alignSelf: 'center',
    border: 'none',
    padding: '10px 0',
    backgroundColor: 'transparent',
    color: `${colors.DarkGrayishCyan}`,
    fontWeight: 500,
    cursor: 'pointer',

    '&:hover': {
      color: `${colors.Primary}`,
      textDecoration: 'underline'
    }
  },

  [`@media screen and (max-width: ${media.tablet})`]: {
    filter: {
      margin: '-90px auto 50px',
      padding: '10px 25px'
    }
  }
});

export default useStyles;