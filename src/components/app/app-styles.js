import {createUseStyles} from 'react-jss';

export const colors = {
  Primary: 'hsl(180, 29%, 50%)',
  Background: 'hsl(180, 52%, 96%)',
  FilterTablets: 'hsl(180, 31%, 95%)',
  DarkGrayishCyan: 'hsl(180, 8%, 52%)',
  VeryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
  White: '#fff'
}

export const media = {
  mobile: '600px',
  tablet: '900px'
}

const useStyles = createUseStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box'
    },
    html: {
      fontSize: '15px',
      color: `${colors.Primary}`
    },
    'html, body, #root': {
      height: '100%'
    }
  },
  app: {
    height: '100%'
  },
  main: {
    height: 'calc(100% - 155px)',
    padding: '75px 60px',
    backgroundColor: `${colors.Background}`
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
      padding: '55px 30px'
    }
  }
});

export default useStyles;