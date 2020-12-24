import {createUseStyles} from 'react-jss';
import {colors} from '../app/app-styles';
import {media} from '../app/app-styles';

const useStyles = createUseStyles({
  '@keyframes show': {
    from: {opacity: 0},
    to: {opacity: 1}
  },
  filter: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1100,
    minHeight: 72,
    margin: '-110px auto 55px',
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
    padding: 10,
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
      margin: '-90px auto 55px',
      padding: '10px 25px'
    }
  }
});

export default useStyles;