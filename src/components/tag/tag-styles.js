import {createUseStyles} from 'react-jss';
import {colors} from '../../styleguide';

const useStyles = createUseStyles({
  '@keyframes opacity-animation': {
    from: {opacity: 0},
    to: {opacity: 1}
  },
  tag: {
    display: 'inline-block',
    height: 32,
    position: 'relative',
    margin: 8,
    padding: '2px 8px 0',
    borderRadius: 3,
    backgroundColor: `${colors.FilterTablets}`,
    color: `${colors.Primary}`,
    fontSize: '13px',
    fontWeight: 600,
    lineHeight: '32px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover, &:active': {
      backgroundColor: `${colors.Primary}`,
      color: `${colors.White}`
    },
    overflow: 'hidden',
    animationName: '$opacity-animation',
    animationDuration: '0.5s'
  },
  withBtn: {
    paddingRight: 40,
    cursor: 'auto',
    '&:hover, &:active': {
      backgroundColor: `${colors.FilterTablets}`,
      color: `${colors.Primary}`
    }
  }
});

export default useStyles;