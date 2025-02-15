import { RiSunCloudyLine } from 'react-icons/ri';
import { FC } from 'react';
import * as S from './styled';

export interface WeatherProps {
  HasPrecipitation: boolean;
  WeatherIcon: number;
  WeatherText: string;
  Temperature: {
    Imperial: {
      Unit: 'F';
      UnitType: number;
      Value: number;
    };
    Metric: {
      Unit: 'C';
      UnitType: number;
      Value: number;
    };
  };
}

interface WeatherConditionsProps {
  weather: WeatherProps[];
}

export const WeatherConditions: FC<WeatherConditionsProps> = ({ weather }) => {
  if (weather === null) return <span />;

  const data = weather[0];

  return (
    <div>
      {data?.Temperature && (
        <S.Weather>
          <div>
            <RiSunCloudyLine size={18} />
            <strong>
              &nbsp;
              {data?.Temperature?.Metric?.Value}
              °C &nbsp;
            </strong>
          </div>
          <div>
            <span>{data?.WeatherText && `( ${data.WeatherText} )`}</span>
            <span> &nbsp; in Constantina.</span>
          </div>
        </S.Weather>
      )}
    </div>
  );
};
