import { LogoVersion } from '../../const';
import Logo from '../logo/logo';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo version={LogoVersion.Footer} />
    </footer>
  );
}
