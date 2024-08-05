import Text from '../../../../components/Text';
import Title from '../../../../components/Title';
import style from './Content.module.scss';
import Block from './components/Block';
import Info from './components/Info';
import img from './assets/img/img.jpg';
import Form from '../../../../modules/Form';
import { useMediaQuery } from 'usehooks-ts';

const ContentSection = ({ job }) => {
  const isTablet = useMediaQuery('(max-width:991.98px)');
  return (
    <section className={style.content}>
      <Block.Base>
        {isTablet && (
          <Block.Col>
            <Info
              img={img}
              title={job.team}
              employment={job.worktime}
              place={job.location}
            />
          </Block.Col>
        )}
        <Block.Col>
          <Text bold upperCase secondary>
            <Title.Row>01</Title.Row>
          </Text>
        </Block.Col>
        <Block.Col>
          <Title.H4>
            <Title.Row>Responsibilities</Title.Row>
          </Title.H4>
          <Text lg className={style.list}>
            <ul>
              {
                job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
          </Text>
        </Block.Col>
        {!isTablet && (
          <Block.Col>
            <Info
              img={img}
              title={job.team}
              employment={job.worktime}
              place={job.location}
            />
          </Block.Col>
        )}
      </Block.Base>
      <Block.Base>
        <Block.Col>
          <Text bold upperCase secondary>
            <Title.Row>02</Title.Row>
          </Text>
        </Block.Col>
        <Block.Col>
          <Title.H4>
            <Title.Row>Requirements</Title.Row>
          </Title.H4>
          <Text lg className={style.list}>
            <ul>
              {
                job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
          </Text>
        </Block.Col>
        <Block.Col></Block.Col>
      </Block.Base>
      <Block.Base>
        <Block.Col>
          <Text bold upperCase secondary>
            <Title.Row>03</Title.Row>
          </Text>
        </Block.Col>
        <Block.Col>
          <Title.H4>
            <Title.Row>What we offer</Title.Row>
          </Title.H4>
          <Text lg className={style.list}>
            <ul>
              {
                job.weOffer.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
          </Text>
        </Block.Col>
      </Block.Base>
      <Block.Base>
        <Block.Col>
          <Text bold upperCase secondary>
            <Title.Row>Application form</Title.Row>
          </Text>
        </Block.Col>
        <Block.Col>
          <Title.H4>
            <Title.Row>Fill in the forms</Title.Row>
            <Title.Row delay={800}>and we will contact you</Title.Row>
            <Form type={'career'} className={style.form} />
          </Title.H4>
        </Block.Col>
      </Block.Base>
    </section>
  );
};

export default ContentSection;
