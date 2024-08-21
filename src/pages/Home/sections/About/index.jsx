import { useMediaQuery } from 'usehooks-ts';
import Text from '../../../../components/Text';
import Title from '../../../../components/Title';
import style from './About.module.scss';
import videoWebm from './assets/video/cat.webm';
import cat from './assets/img/cat.png';

const AboutSection = () => {
  const isTablet = useMediaQuery('(max-width:991.98px)');
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <section className={style.about}>
      <div className='__container'>
        <div className={style.aboutTop}>
          {!isTablet && (
            <Title.H2>
              <div className={style.aboutTop__row}>
                <Text secondary bold className={style.aboutTop__rowTitle}>
                  <Title.Row>About</Title.Row>
                </Text>
                <Title.Row>We build worlds, create</Title.Row>
              </div>
              <Title.Row>memorable characters, and craft animations</Title.Row>
              <Title.Row>that awaken people’s inner weeb.</Title.Row>
            </Title.H2>
          )}
          {isTablet && (
            <>
              <Title.H2>
                <div className={style.aboutTop__row}>
                  <Text secondary bold className={style.aboutTop__rowTitle}>
                    <Title.Row>About</Title.Row>
                  </Text>
                </div>
                <Title.Row>We build worlds, </Title.Row>
                <Title.Row>create memorable </Title.Row>
                <Title.Row>characters, and </Title.Row>
                <Title.Row>craft animations </Title.Row>
                <Title.Row>that awaken people’s </Title.Row>
                <Title.Row>inner weeb.</Title.Row>
              </Title.H2>
            </>
          )}
        </div>
      </div>
      <div className={style.aboutBody}>
        <div className={style.col}>
          <Text secondary bold className={style.aboutBody__title}>
            <Title.Row upperCase>Otsu Labs Unpacked</Title.Row>
          </Text>
        </div>
        {
          isTablet ?
          <>
            <div className={`${style.col} ${style.noPadding} ${style.mainUnpacked}`}>
              <div className={`${style.row} ${style.noPadding}`}>
                <div className={`${style.col} ${style.noPadding} ${style.mainUnpackedItem}`}>
                  <div className={style.row}>
                    <Title.Value>
                      <Title.Row>50M+</Title.Row>
                    </Title.Value>
                    <div className={style.row__label}>
                      <Title.Row>Views on social</Title.Row>
                    </div>
                    <Text className={style.row__text} secondary>
                      Our work generated
                      <br />
                      50M+ views
                      <br/>
                      on social media.
                    </Text>
                  </div>
                </div>
                <div className={`${style.col} ${style.noPadding} ${style.mainUnpackedItem}`}>
                  <div className={style.row}>
                    <Title.Value>
                      <Title.Row>40</Title.Row>
                    </Title.Value>
                    <div className={style.row__label}>
                      <Title.Row>Creators</Title.Row>
                    </div>
                    <Text className={style.row__text} secondary>
                      Our studio is home
                      <br />
                      to 40 talented
                      <br/>
                      in-house creators.
                    </Text>
                  </div>
                </div>
              </div>
              <div className={`${style.row} ${style.noPadding}`}>
                <div className={`${style.col} ${style.noPadding} ${style.mainUnpackedItem}`}>
                  <div className={style.row}>
                    <Title.Value>
                      <Title.Row>2023</Title.Row>
                    </Title.Value>
                    <div className={style.row__label}>
                      <Title.Row>Year</Title.Row>
                    </div>
                    <Text className={style.row__text} secondary>
                      Born in 2023, Otsu
                      <br />
                      Labs is the new kid
                      <br/>
                      on the block.
                    </Text>
                  </div>
                </div>
                <div className={`${style.col} ${style.noPadding} ${style.mainUnpackedItem}`}>
                  <div className={style.row}>
                    <Title.Value>
                      <Title.Row>180K+</Title.Row>
                    </Title.Value>
                    <div className={style.row__label}>
                      <Title.Row>Followers</Title.Row>
                    </div>
                    <Text className={style.row__text} secondary>
                      We've hit the 180k
                      <br />
                      with our internal
                      <br/>
                      projects' followers.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </> :
          <>
            <div className={`${style.col} ${style.noPadding} ${style.mainUnpacked}`}>
              <div className={`${style.col} ${style.noPadding} ${style.mainUnpackedItem}`}>
                <div className={style.col}>
                  <div className={style.row}>
                    <Title.Value>
                      <Title.Row>50M+</Title.Row>
                    </Title.Value>
                    <div className={style.row__label}>
                      <Title.Row>Views on social</Title.Row>
                    </div>
                    <Text className={style.row__text} secondary>
                      Our work generated 50M+
                      <br/>
                      views on social media.
                    </Text>
                  </div>
                </div>
                <div className={`${style.col} ${style.onlyBorderTop}`}>
                  <div className={style.row}>
                    <Title.Value>
                      <Title.Row>2023</Title.Row>
                    </Title.Value>
                    <div className={style.row__label}>
                      <Title.Row>Year</Title.Row>
                    </div>
                    <Text className={style.row__text} secondary>
                      Born in 2023, Otsu Labs
                      <br/>
                      is the new kid on the block.
                    </Text>
                  </div>
                </div>
              </div>
              <div className={`${style.col} ${style.noPadding} ${style.mainUnpackedItem}`}>
                <div className={style.col}>
                  <div className={style.row}>
                    <Title.Value>
                      <Title.Row>40</Title.Row>
                    </Title.Value>
                    <div className={style.row__label}>
                      <Title.Row>Creators</Title.Row>
                    </div>
                    <Text className={style.row__text} secondary>
                      Our studio is home to 40
                      <br/>
                      talented in-house creators.
                    </Text>
                  </div>
                </div>
                <div className={`${style.col} ${style.onlyBorderTop}`}>
                  <div className={style.row}>
                    <Title.Value>
                      <Title.Row>180K+</Title.Row>
                    </Title.Value>
                    <div className={style.row__label}>
                      <Title.Row>Followers</Title.Row>
                    </div>
                    <Text className={style.row__text} secondary>
                      We've hit the 180k with our
                      <br/>
                      internal projects' followers.
                    </Text>
                  </div>
                </div>
              </div>

            </div>
          </>
        }
        <div className={style.col}>
          <div className={style.cat}>
            {isSafari ? (
              <img src={cat} alt='' />
            ) : (
              <video autoPlay muted loop playsinline>
                <source src={videoWebm} type='video/webm' />
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
