import { useMediaQuery } from 'usehooks-ts';
import PageInfo from '../../../../components/PageInfo';
import Text from '../../../../components/Text';
import Title from '../../../../components/Title';
import style from './Main.module.scss';

const MainSection = () => {
  const isTablet = useMediaQuery('(max-width:991.98px)');

  return (
    <section className={style.main}>
      <div className='__container'>
        <PageInfo.Base className={style.mainBody}>
          <PageInfo.Row>
            <PageInfo.Col className={style.prefixTitle}>
              <Text bold upperCase secondary>
                <Title.Row>Who we are</Title.Row>
              </Text>
            </PageInfo.Col>
            <PageInfo.Col className={style.title}>
              <Title.H2>
                {isTablet ? (
                  <>
                    <Title.Row>Animators, Artists,</Title.Row>
                    <Title.Row>Storytellers, and</Title.Row>
                    <Title.Row>Just Weebs.</Title.Row>
                  </>
                ) : (
                  <>
                    <Title.Row>Animators, Artists,</Title.Row>
                    <Title.Row>Storytellers, and Just Weebs.</Title.Row>
                  </>
                )}
              </Title.H2>
            </PageInfo.Col>
            <PageInfo.Col className={style.right}></PageInfo.Col>
          </PageInfo.Row>
          <PageInfo.Row className={style.description}>
            <PageInfo.Col className={style.leftDescription}></PageInfo.Col>
            <PageInfo.Col className={style.mainDescription} text>
              <Text secondary className={style.mainBody__text}>
                <p>
                Founded in 2023, we are on a mission to help brands tap into anime audience
                by creating high-quality animations that awaken people’s inner weeb.
                </p>
              </Text>
              <Text secondary className={style.mainBody__text}>
                <p>
                Our team spans the globe, with members from the U.S., Vietnam, South Korea, Japan, the Philippines, Portugal, and beyond.
                </p>
              </Text>
            </PageInfo.Col>
            <PageInfo.Col className={style.rightDescription}></PageInfo.Col>
          </PageInfo.Row>
        </PageInfo.Base>
      </div>
    </section>
  );
};

export default MainSection;
