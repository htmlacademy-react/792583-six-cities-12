import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { LogoVersion } from '../../types/offers';

type LogoProps = {
  version: LogoVersion;
}

export default function Logo({ version }: LogoProps): JSX.Element {
  const { imgSize, block } = version;
  return (
    <NavLink className={`${block}__logo-link`} to={AppRoute.Main}>
      <img className={`${block}__logo`} src="img/logo.svg" alt="6 cities logo" width={imgSize.width} height={imgSize.height} />
    </NavLink>
  );
}
