import { Rings } from 'react-loader-spinner';

export default function LoadingScreen(): JSX.Element {
  return (
    <div>
      <h2>Loading...</h2>
      <Rings
        height="250"
        width="250"
        color="#4481c3"
        radius="15"
        wrapperStyle={{}}
        wrapperClass=""
        visible
        ariaLabel="rings-loading"
      />
    </div>
  );
}
