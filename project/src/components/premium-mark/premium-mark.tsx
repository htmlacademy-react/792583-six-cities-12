import { Block } from '../../const';

type PremiumMarkProps = {
  block: Block;
}

export default function PremiumMark({ block }: PremiumMarkProps): JSX.Element {
  return (
    <div className={`${block}__mark`}>
      <span>Premium</span>
    </div>
  );
}
