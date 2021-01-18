import {createUseStyles} from 'react-jss';
import {colors, media} from '../../styleguide';


const useStyles = createUseStyles({
  '@keyframes opacity-animation': {
    from: {opacity: 0},
    to: {opacity: 1}
  },
  card: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1110,
    margin: '0 auto 24px',
    borderRadius: 5,
    padding: '32px 40px',
    backgroundColor: `${colors.White}`,
    boxShadow: `5px 5px 15px hsl(188, 40%, 88%)`,
    animationName: '$opacity-animation',
    animationDuration: '0.5s',

    '&$featured::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 5,
      height: '100%',
      borderRadius: '5px 0 0 5px',
      backgroundColor: `${colors.Primary}`
    }
  },
  info: {
    display: 'flex',
    marginLeft: 0,
    marginRight: 'auto',
    paddingRight: 40
  },
  content: {},
  logo: {
    width: 88,
    height: 88,
    marginRight: '25px'
  },
  company: {
    display: 'inline-block',
    margin: '0 16px 0 0',
    fontSize: '14px',
    lineHeight: '24px'
  },
  labels: {
    display: 'inline-block'
  },
  label: {
    display: 'inline-block',
    borderRadius: 50,
    margin: '0 4px',
    padding: '7px 8px 5px 8px',
    fontSize: '11px',
    fontWeight: 600,
    color: `${colors.White}`,

    '&$new': {
      backgroundColor: `${colors.Primary}`
    },
    '&$featured': {
      backgroundColor: `${colors.VeryDarkGrayishCyan}`
    }
  },
  position: {
    margin: '12px 0',
    color: `${colors.VeryDarkGrayishCyan}`,
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover, &:active': {
      color: `${colors.Primary}`
    }
  },
  meta: {
    color: `${colors.DarkGrayishCyan}`,
    '& span': {
      padding: '0 14px',

      '&:first-child': {
        paddingLeft: 0
      }
    }
  },
  tags: {
    display: 'flex',
    justifyContent: 'right',
    flexWrap: 'wrap',
    alignSelf: 'center',
    margin: '0 -7px'
  },
  new: {
    marginLeft: 0
  },
  featured: {},

  [`@media screen and (max-width: ${media.tablet})`]: {
    card: {
      padding: '34px 23px 17px'
    },
    logo: {
      width: 60,
      height: 60
    },
    info: {
      paddingRight: 20
    },
    tags: {
      flexShrink: 4
    }
  },
  [`@media screen and (max-width: ${media.mobile})`]: {
    card: {
      display: 'block',
      marginBottom: 38
    },
    info: {
      width: '100%',
      borderBottom: `1px solid ${colors.DarkGrayishCyan}`,
      padding: '0 0 22px 0'
    },
    company: {
      fontSize: '13px'
    },
    position: {
      margin: '10px 0 15px',
      fontSize: '15px'
    },
    meta: {
      '& span': {
        padding: '0 7px',

        '&:first-child': {
          paddingLeft: 0
        }
      }
    },
    tags: {
      paddingTop: 6,
      justifyContent: 'left',
      flexShrink: 1
    },
    logo: {
      position: 'absolute',
      top: '-23px',
      width: 50,
      height: 50
    }
  }
});

export default useStyles;