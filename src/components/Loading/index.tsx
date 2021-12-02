import loading50 from '../../images/LoadingAnimation50.gif';
import loading100 from '../../images/LoadingAnimation100.gif';
import loading200 from '../../images/LoadingAnimation200.gif';
import loading300 from '../../images/LoadingAnimation300.gif';
import loading500 from '../../images/LoadingAnimation500.gif';

import './index.css';

interface ILoadingProps {
  size: 50 | 100 | 200 | 300 | 500;
  distanceHeader?: boolean;
}

export const Loading = ({ size, distanceHeader }: ILoadingProps) => {
  switch (size) {
    case 50:
      return (
        <img
          className={`loading loading-50 ${
            distanceHeader && 'distance-header'
          }`}
          src={loading50}
          alt="loading"
        />
      );

    case 100:
      return (
        <img
          className={`loading loading-100 ${
            distanceHeader && 'distance-header'
          }`}
          src={loading100}
          alt="loading"
        />
      );

    case 200:
      return (
        <img
          className={`loading loading-200 ${
            distanceHeader && 'distance-header'
          }`}
          src={loading200}
          alt="loading"
        />
      );

    case 300:
      return (
        <img
          className={`loading loading-300 ${
            distanceHeader && 'distance-header'
          }`}
          src={loading300}
          alt="loading"
        />
      );

    case 500:
      return (
        <img
          className={`loading loading-500 ${
            distanceHeader && 'distance-header'
          }`}
          src={loading500}
          alt="loading"
        />
      );
    default:
      return (
        <img
          className={`loading loading-50 ${
            distanceHeader && 'distance-header'
          }`}
          src={loading50}
          alt="loading"
        />
      );
  }
};
