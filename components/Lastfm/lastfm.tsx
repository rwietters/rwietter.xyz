import { BsSpotify } from 'react-icons/bs';
import type { FC } from 'react';
import { TbPlayerPause } from 'react-icons/tb';
import * as S from './styles';
import type { LastFmTrackProps, TrackProps } from './types';
import { NotPlaying } from './NotPlaying';

export const LastFMTrack: FC<LastFmTrackProps> = ({ lastFm }) => {
  if (lastFm === null) return <span />;

  const track: TrackProps = lastFm?.recenttracks?.track[0];
  const nowPlaying = track['@attr']?.nowplaying === 'true';
  const imageUrl = track.image[3]['#text'];

  if (!nowPlaying) return <NotPlaying />;

  return (
    <S.Playing>
      {imageUrl ? (
        <img src={imageUrl} alt={track.name} width={90} height={90} />
      ) : (
        <span />
      )}
      <S.PlayingArtist>
        <S.PlayingSpot>
          <BsSpotify size={19} color="#1DB954" />
          <span className="artist">
            {track.artist['#text']}
          </span>
        </S.PlayingSpot>

        <p className="play">
          <a href={track.url} target="_blank" rel="noreferrer">
            <TbPlayerPause size={19} />
            <strong className="song">{track.name}</strong>
          </a>
        </p>
      </S.PlayingArtist>
    </S.Playing>
  );
};
