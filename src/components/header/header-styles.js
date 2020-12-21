import { createUseStyles } from 'react-jss';
import { colors } from '../app/app-styles';
import bgDesktop from './images/bg-header-desktop.svg';

const useStyles = createUseStyles({
  header: {
    minHeight: 155,
    backgroundColor: `${colors.Primary}`,
    backgroundImage: `url(${bgDesktop})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
});

export default useStyles;