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
            <PageInfo.Col>
              <Text bold upperCase secondary>
                <Title.Row>Join us</Title.Row>
              </Text>
            </PageInfo.Col>
            <PageInfo.Col>
              <Title.H2>
                {isTablet ? (
                  <>
                    <Title.Row>Step into a culture</Title.Row>
                    <Title.Row>where being weeby is</Title.Row>
                    <Title.Row>a way of life.</Title.Row>
                  </>
                ) : (
                  <>
                    <Title.Row>Step into a culture where being</Title.Row>
                    <Title.Row>weeby is a way of life.</Title.Row>
                  </>
                )}
              </Title.H2>
            </PageInfo.Col>
          </PageInfo.Row>
          <PageInfo.Row noDivider>
            <PageInfo.Col></PageInfo.Col>
            <PageInfo.Col text>
              <div className={style.col}>
                <PageInfo.Text
                  secondary
                  inheritWith
                  className={style.description}
                >
                  <p>We are a small team of passionate creators, constantly embracing challenges and venturing into the unknown.</p>
                </PageInfo.Text>
                <PageInfo.Text
                  secondary
                  className={style.description}
                >
                  <p>We live and breathe anime—creating it, watching it, and everything in between.</p>
                </PageInfo.Text>
                <PageInfo.Text
                  secondary
                  className={style.description}
                >
                  <p>We’re always eager to connect with new talent who share our passion for animation and art.</p>
                </PageInfo.Text>
              </div>
            </PageInfo.Col>
            <PageInfo.Col></PageInfo.Col>
            <PageInfo.Col></PageInfo.Col>
          </PageInfo.Row>
        </PageInfo.Base>
      </div>
    </section>
  );
};

export default MainSection;
