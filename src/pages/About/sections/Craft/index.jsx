import { useMediaQuery } from 'usehooks-ts';
import PageInfo from '../../../../components/PageInfo';
import Text from '../../../../components/Text';
import Title from '../../../../components/Title';
import style from '../Main/Main.module.scss';

const CraftSection = () => {
  const isTablet = useMediaQuery('(max-width:991.98px)');

  return (
    <section className={`${style.main} ${style.divider}`}>
      <div className='__container'>
        <PageInfo.Base className={`${style.mainBody} ${style.craft}`}>
          <PageInfo.Row>
            <PageInfo.Col className={style.prefixTitle}>
              <Text bold upperCase secondary>
                <Title.Row>Our craft</Title.Row>
              </Text>
            </PageInfo.Col>
            <PageInfo.Col className={style.title}>
              <Title.H2>
                <>
                  <Title.Row>Traditional 2D</Title.Row>
                  <Title.Row>cel-shade animation</Title.Row>
                </>
              </Title.H2>
            </PageInfo.Col>
            <PageInfo.Col className={style.right}></PageInfo.Col>
          </PageInfo.Row>
          <PageInfo.Row className={style.description}>
            <PageInfo.Col className={style.leftDescription}></PageInfo.Col>
            <PageInfo.Col className={style.mainDescription} text>
              <Text secondary className={style.mainBody__text}>
                <p>
                We specialize in traditional 2D cel-shade animation, where every second is crafted frame by frame.
                </p>
              </Text>
              <Text secondary className={style.mainBody__text}>
                <p>
                From creating character designs to post-production, we'll work together to create something we will all be proud of.
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

export default CraftSection;
