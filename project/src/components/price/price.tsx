import { Block } from '../../const';

type PriseProps = {
  price: number;
  block: Block;
}

export default function Price({ price, block }: PriseProps): JSX.Element {
  return (
    <div className={`${block}__price`}>
      <b className={`${block}__price-value`}>&euro;{price}</b>
      <span className={`${block}__price-text`}>&nbsp;night</span>
    </div>
  );
}
