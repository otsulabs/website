import { Link } from 'react-router-dom';
import Text from '../../../../../../components/Text';
import style from './VideoCard.module.scss';
import { useEffect, useRef, useState } from 'react';

const VideoCard = ({
  img,
  video,
  title,
  user,
  userType,
  className,
  to,
  preview,
}) => {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    if (!videoRef.current || !videoRef.current.paused || playing) return
    videoRef.current.play().then(() => {
    }).catch(function(error) {
    });
  };
  const pauseVideo = () => {
    if (!videoRef.current || videoRef.current.paused || !playing) return
    videoRef.current.pause();
    videoRef.current.currentTime = 1;
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 1;
      videoRef.current.onplaying = () => {
        setPlaying(true);
      }

      videoRef.current.onpause = () => {
        setPlaying(false);
      }
    }
  }, []);

  return (
    <Link
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      to={to}
      className={`${style.card} ${className}`}
    >
      <div className={style.card__video}>
        {video && (
          <video
            ref={videoRef}
            muted
            preload={'metadata'}
            playsinline
            src={`${video}#t=0.1`}
            alt=''
            poster={preview}
          />
        )}
        {img && <img src={img} alt='' />}

        {preview && (
          <div className={style.card__videoPreview}>
            <img src={preview} alt='' />
          </div>
        )}
      </div>
      <div className={style.cardInfo}>
        <div className={style.cardInfo__row}>
          <Text lg bold>
            {title}
          </Text>
        </div>
        <div className={style.cardInfo__row}>
          <Text secondary>{user}</Text>
          <Text secondary>{userType}</Text>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
