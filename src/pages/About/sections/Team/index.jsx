import { useMediaQuery } from 'usehooks-ts';
import Title from '../../../../components/Title';
import style from './Team.module.scss';
import Khoa from '../../assets/img/khoa.png';
import NoaKang from '../../assets/img/noa-kang.png';
import Erene from '../../assets/img/erene.png';
import Raymond from '../../assets/img/raymond.png';
import LongAn from '../../assets/img/long-an.png';
import HuuTu from '../../assets/img/huu-tu.png';
import Julius from '../../assets/img/julius.png';
import AJ from '../../assets/img/aj.png';
import Khang from '../../assets/img/khang.png';
import HolyCat from '../../assets/img/holy-cat.png';
import Ngot from '../../assets/img/ngot.png';
import Haru from '../../assets/img/haru.png';

const TeamSection = ({ img }) => {
  const isTablet = useMediaQuery('(max-width:991.98px)');

  const members = [
    {
      name: 'Khoa',
      position: 'CEO',
      image: Khoa,
      linkedin: 'https://www.linkedin.com/in/noakang/'
    },
    {
      name: 'Noa Kang',
      position: 'CMO',
      image: NoaKang,
      linkedin: 'https://www.linkedin.com/in/noakang/',
      x: 'https://x.com/NoaKang'
    },
    {
      name: 'Erene',
      position: 'Creative Director',
      image: Erene
    },
    {
      name: 'Raymond',
      position: 'Producer',
      image: Raymond
    },
    {
      name: 'Long An',
      position: 'Art Director',
      image: LongAn
    },
    {
      name: 'Huu Tu',
      position: 'Animation Director',
      image: HuuTu
    },
    {
      name: 'Julius',
      position: 'Project Manager',
      image: Julius
    },
    {
      name: 'AJ',
      position: 'Key Animator',
      image: AJ
    },
    {
      name: 'Khang',
      position: 'Concept Artist',
      image: Khang
    },
    {
      name: 'Holy Cat',
      position: 'Art Manager',
      image: HolyCat
    },
    {
      name: 'Ngot',
      position: 'Storyboard Artist',
      image: Ngot
    },
    {
      name: 'Haru',
      position: 'Color Designer',
      image: Haru
    },
  ]
  return (
    <section>
      <div className={isTablet ? '' : `__container`}>
        <div className={style.img}>
          <img src={img} alt='' />
        </div>
      </div>
      <div className={`__container`}>
        <div className={style.container}>
          <div className={style.wrapper}>
            <div className={style.members}>
              {
                members.map((item, index) => (
                  <div key={index} className={style.membersItem}>
                    <img src={item.image} alt="" />
                    <p className={style.name}>{ item.name }</p>
                    <p className={style.position}>{ item.position }</p>
                    {
                      (item.linkedin || item.x) ? <div className={style.social}>
                        {
                          item.x && <a href={item.x} rel='noreferrer' target='_blank' className={`${style.socialIcon} ${style.xicon}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                              <path d="M11.4539 1.18994H13.5624L8.95607 6.45462L14.375 13.6187H10.132L6.80877 9.27371L3.00622 13.6187H0.89652L5.8234 7.9875L0.625 1.18994H4.97569L7.97962 5.1614L11.4539 1.18994ZM10.7139 12.3567H11.8822L4.34087 2.38565H3.08716L10.7139 12.3567Z" fill="white"/>
                            </svg>
                          </a>
                        }
                        {
                          item.linkedin && <a href={item.linkedin} rel='noreferrer' target='_blank' className={`${style.socialIcon} ${style.linkedinicon}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                              <g clip-path="url(#clip0_528_3912)">
                                <path d="M13.8927 0H1.10729C0.81362 0 0.531976 0.116661 0.324318 0.324318C0.116661 0.531976 0 0.81362 0 1.10729V13.8927C0 14.1864 0.116661 14.468 0.324318 14.6757C0.531976 14.8833 0.81362 15 1.10729 15H13.8927C14.1864 15 14.468 14.8833 14.6757 14.6757C14.8833 14.468 15 14.1864 15 13.8927V1.10729C15 0.81362 14.8833 0.531976 14.6757 0.324318C14.468 0.116661 14.1864 0 13.8927 0ZM4.47083 12.7781H2.21563V5.61458H4.47083V12.7781ZM3.34167 4.62188C3.08585 4.62043 2.8362 4.54325 2.62421 4.40005C2.41222 4.25686 2.2474 4.05408 2.15055 3.81731C2.0537 3.58053 2.02915 3.32037 2.08002 3.06966C2.13088 2.81895 2.25488 2.58892 2.43635 2.40861C2.61782 2.2283 2.84863 2.10579 3.09967 2.05654C3.3507 2.00728 3.6107 2.0335 3.84685 2.13187C4.08299 2.23024 4.28471 2.39635 4.42654 2.60926C4.56837 2.82216 4.64395 3.07231 4.64375 3.32813C4.64616 3.4994 4.61407 3.6694 4.54938 3.828C4.4847 3.98661 4.38874 4.13056 4.26723 4.25129C4.14572 4.37202 4.00116 4.46705 3.84214 4.53072C3.68312 4.59439 3.51292 4.62539 3.34167 4.62188ZM12.7833 12.7844H10.5292V8.87083C10.5292 7.71667 10.0385 7.36042 9.40521 7.36042C8.73646 7.36042 8.08021 7.86458 8.08021 8.9V12.7844H5.825V5.61979H7.99375V6.6125H8.02292C8.24063 6.17188 9.00313 5.41875 10.1667 5.41875C11.425 5.41875 12.7844 6.16563 12.7844 8.35313L12.7833 12.7844Z" fill="white"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_528_3912">
                                  <rect width="15" height="15" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        }
                      </div> : <></>
                    }
                  </div>
                ))
              }
            </div>
            <div className={style.otherMembers}>
              <div className={style.plusIcon}>
                <div className={style.line}></div>
                <div className={style.line}></div>
              </div>
              <div className={style.otherMembersCount}>
                <p className={style.text}>
                {isTablet ? (
                  <>
                    <Title.Row>30 amazing creators in-house</Title.Row>
                  </>
                ) : (
                  <>
                    <Title.Row>30 amazing</Title.Row>
                    <Title.Row delay={300}>creators</Title.Row>
                    <Title.Row delay={500}>in-house</Title.Row>
                  </>
                )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
