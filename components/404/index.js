import { h, render } from 'preact';
import FourOhFour from './FourOhFour';

export default (element) => {
  const init = () => {
    render(<FourOhFour />, element);
  };

  init();
};
