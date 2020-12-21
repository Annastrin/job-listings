import {createUseStyles} from 'react-jss';
import {colors} from '../app/app-styles';

const useStyles = createUseStyles({
  tag: {
    display: 'inline-block',
    height: 32,
    position: 'relative',
    margin: 7,
    padding: '0 8px',
    borderRadius: 3,
    backgroundColor: `${colors.FilterTablets}`,
    color: `${colors.Primary}`,
    fontSize: '0.93rem',
    fontWeight: 600,
    lineHeight: '32px',
    cursor: 'pointer'
  },
  withBtn: {
    paddingRight: 40,
    cursor: 'auto'
  }
});

export default useStyles;