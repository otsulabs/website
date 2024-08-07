import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel } from 'swiper/modules';
import Button from '../../../../components/Button';
import Title from '../../../../components/Title';
import style from './Projects.module.scss';
// import video1 from '../../../projectList/TheWrathOfGods/sections/Content/assets/video/video.mp4';
// import video2 from '../../../projectList/Eris/sections/Content/assets/video/video.mp4';
// import video3 from '../../../projectList/TheBookOfNouns/sections/Content/assets/video/video.mp4';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { siteContent } from '../../../../content';

const ProjectsSection = () => {
  return (
    <section className={style.projects}>
      <div className='__container'>
        <div className={style.projectsTop}>
          <Title.H2>
            <Title.Row>Projects</Title.Row>
          </Title.H2>
          <Button
            className={style.projectsTop__btn}
            to={'projects'}
            light
            title={'View all'}
          />
        </div>
        <Swiper
          modules={[Scrollbar, Mousewheel]}
          spaceBetween={30}
          slidesPerView={'auto'}
          scrollbar={{ draggable: true, el: '#projects-slider-scrollbar' }}
          // mousewheel={true}
          className={style.projectsSlider}
          // slideActiveClass={style.active}
        >
          <SwiperSlide className={style.projectsSlider__slide}>
            <VideoCard
              to={'projects/nova_thera_the_reckoning'}
              preview={siteContent.projectsPreview.novaTheraTheReckoning}
              video={siteContent.projectsVideo360Quality.novaTheraTheReckoning}
              title={'Nova Thera: The Reckoning'}
            />
          </SwiperSlide>
          <SwiperSlide className={style.projectsSlider__slide}>
            <VideoCard
              to={'projects/the_wrath_of_gods'}
              preview={siteContent.projectsPreview.theWrathOfGods}
              video={siteContent.projectsVideo360Quality.theWrathOfGods}
              title={'The Wrath of Gods'}
            />
          </SwiperSlide>
          <SwiperSlide className={style.projectsSlider__slide}>
            <VideoCard
              to={'projects/eris'}
              preview={siteContent.projectsPreview.eris}
              video={siteContent.projectsVideo360Quality.eris}
              title={'Eris'}
            />
          </SwiperSlide>
          <SwiperSlide className={style.projectsSlider__slide}>
            <VideoCard
              to={'projects/the_book_of_nouns'}
              preview={siteContent.projectsPreview.theBookOfNouns}
              video={siteContent.projectsVideo360Quality.theBookOfNouns}
              title={'The Book of nouns'}
            />
          </SwiperSlide>
        </Swiper>
        <div
          id='projects-slider-scrollbar'
          className={style.projectsScrollbar}
        ></div>
      </div>
    </section>
  );
};

const VideoCard = ({ preview, video, title, to }) => {
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
      to={to}
      className={style.slide}
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
    >
      <div className={style.projectsSlider__img}>
        {/* <img src={img} alt='' /> */}
        <video
          muted
          ref={videoRef}
          preload={'metadata'}
          playsinline
          src={`${video}#t=0.1`}
        ></video>
        {preview && (
          <div className={style.projectsSlider__imgPreview}>
            <img src={preview} alt='' />
          </div>
        )}
      </div>
      <div className={style.projectsSlider__title}>{title}</div>
    </Link>
  );
};

export default ProjectsSection;
