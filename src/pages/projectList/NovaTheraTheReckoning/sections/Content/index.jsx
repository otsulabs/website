import { useMediaQuery } from 'usehooks-ts';
import style from './Content.module.scss';

import Title from '../../../../../components/Title';
import PageHeader from '../../../ProjectDefault/modules/Header';
import Gallery from '../../../ProjectDefault/modules/Gallery';
import Description from '../../../ProjectDefault/modules/Description';
import Credits from '../../../ProjectDefault/modules/Credits';

// import videoSrc from './assets/video/video.mp4';
import highlight_img1 from './assets/highlights/img1.png';
import highlight_img2 from './assets/highlights/img2.png';
import highlight_img3 from './assets/highlights/img3.png';
import highlight_img4 from './assets/highlights/img4.png';
import highlight_img5 from './assets/highlights/img5.png';
import highlight_img6 from './assets/highlights/img6.png';
import highlight_img7 from './assets/highlights/img7.png';
import highlight_img8 from './assets/highlights/img8.png';
import highlight_img9 from './assets/highlights/img9.png';
import highlight_img10 from './assets/highlights/img10.png';
import highlight_img11 from './assets/highlights/img11.png';
import highlight_img12 from './assets/highlights/img12.png';

import development_img1 from './assets/development/img1.png';
import development_img2 from './assets/development/img2.png';
import development_img3 from './assets/development/img3.png';
import development_img4 from './assets/development/img4.png';
import development_img5 from './assets/development/img5.png';
import development_img6 from './assets/development/img6.png';
import development_img7 from './assets/development/img7.png';
import development_img8 from './assets/development/img8.png';
import { siteContent } from '../../../../../content';

const Content = () => {
  const isTablet = useMediaQuery('(max-width:991.98px)');

  return (
    <section className={style.content}>
      <PageHeader
        title={
          isTablet ? (
            <>
              <Title.Row>Nova Thera: The Reckoning</Title.Row>
            </>
          ) : (
            <>
              <Title.Row>Nova Thera:</Title.Row>
              <Title.Row>The Reckoning</Title.Row>
            </>
          )
        }
        client={'Pixelmon'}
        brief={
          'An official trailer for Pixelmon Anime Universe.'
        }
        scope={
          'Character Development and Design, Lore and World-building, Concept art, Background art, Script, Storyboard, Color Script, Full Production, Sound Design, Visual Effects.'
        }
      />
      <Gallery.Base
        withSpace
        horizontal
        big
        video
        videoThumbnail={siteContent.projectsPreview.novaTheraTheReckoning}
        items={[siteContent.projectsVideo.novaTheraTheReckoning]}
      />
      <Description title={'highlights'} />
      <Gallery.Base
        horizontal
        withSpace
        items={[
          highlight_img1,
          highlight_img2,
          highlight_img3,
          highlight_img4,
          highlight_img5,
          highlight_img6,
          highlight_img7,
          highlight_img8,
          highlight_img9,
          highlight_img10,
          highlight_img11,
          highlight_img12,
        ]}
      />
      <Description title={'Development'} />
      <Gallery.Base
        horizontal
        withSpace
        items={[
          development_img1,
          development_img2,
          development_img3,
          development_img4,
          development_img5,
          development_img6,
          development_img7,
          development_img8,
        ]}
      />
      <Credits
        noBorder
        content={[
          [
            {
              title: 'Creative Director:',
              value: 'Erene',
            },
            {
              title: 'Executive Producer:',
              value: 'Khoa Trinh',
            },
            {
              title: 'Director:',
              value: 'Erene, Huu Tu',
            },
            {
              title: 'Animation Director:',
              value: 'Huu Tu',
            },
            {
              title: 'Art Director:',
              value: 'Longan',
            },
            {
              title: 'Character Design:',
              value: 'Huu Tu',
            },
            {
              title: 'Storyboard:',
              value: 'Ngoc Huynh, Huu Tu',
            },
            {
              title: 'Color Script:',
              value: 'Longan, Thao Pham, Ngoc To, Khang Le, Thuy Do'
            },
            {
              title: 'Compositing Lead',
              value: 'Phuc Huynh'
            },
            {
              title: 'Compositing',
              value: 'Phuc Huynh, Loc Nguyen'
            },
          ],
          [
            {
              title: 'Editing',
              value: 'Khoa Trinh, Lam Nguyen'
            },
            {
              title: 'Original drawings Supervisor:',
              value: 'Dennis, AJ',
            },
            {
              title: 'Layout:',
              value: 'Cesar, Codotz, Rhem, Lucas, Rodel',
            },
            {
              title: 'Key Animation:',
              value: 'Jaro Animation, Rhem, Lucas, Cesar, Junjie, Thuy, Rodel',
            },
            {
              title: 'Clean up and coloring:',
              value: 'Julius, Nappy, MrTan, Donpepeng, Jaro Animation, RC, Pewpew',
            },
            {
              title: 'Production Manager:',
              value:
                'Julius de Belen, Raymond, Phuong Vo',
            },
            {
              title: 'Music',
              value: 'Jakub Pietras'
            },
            {
              title: 'Soundfx and master:',
              value: 'Jordan Wiberg (Emmy Award-winning Supervising Sound Editor)'
            },
          ],
        ]}
      />
    </section>
  );
};

export default Content;
