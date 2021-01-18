import {createUseStyles} from 'react-jss';
import {colors, media} from '../../styleguide';

const useStyles = createUseStyles({
  '@import': 'url("https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap")',
  '@global': {
    '*': {
      boxSizing: 'border-box'
    },
    html: {
      fontSize: '15px',
      color: `${colors.Primary}`
    },
    body: {
      margin: 0,
      fontFamily: `'Spartan', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif`,
      fontWeight: 500,
      backgroundColor: `${colors.Background}`
    }
  },
  main: {
    padding: '76px 60px'
  },
  container: {
    position: 'relative',
    maxWidth: 1140,
    margin: '0 auto'
  },

  [`@media screen and (max-width: ${media.tablet})`]: {
    '@global': {
      html: {
        fontSize: '13px'
      }
    },
    main: {
      padding: '55px 25px'
    }
  }
});

export default useStyles;