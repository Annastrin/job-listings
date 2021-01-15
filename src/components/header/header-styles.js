import { createUseStyles } from 'react-jss';
import { colors } from '../app/app-styles';
import { media } from '../app/app-styles';
import bgDesktop from './images/bg-header-desktop.svg';
import bgMobile from './images/bg-header-mobile.svg';

const useStyles = createUseStyles({
  header: {
    minHeight: 155,
    backgroundColor: `${colors.Primary}`,
    backgroundImage: `url(${bgDesktop})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  [`@media screen and (max-width: ${media.mobile})`]: {
    header: {
      backgroundImage: `url(${bgMobile})`
    }
  }
});

export default useStyles;