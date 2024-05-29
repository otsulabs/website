import preview1 from './pages/projectList/TheWrathOfGods/sections/Content/assets/preview.jpg';
import preview2 from './pages/projectList/SystemRoyalePart_1/sections/Content/assets/preview.jpg';
import preview3 from './pages/projectList/SystemRoyalePart_2/sections/Content/assets/preview.jpg';
import preview4 from './pages/projectList/TheDopeShtTypeSlash/sections/Content/assets/preview.jpg';
import preview5 from './pages/projectList/Eris/sections/Content/assets/preview.jpg';
import preview6 from './pages/projectList/TheBookOfNouns/sections/Content/assets/preview.jpg';

const mainInstagram = 'https://www.instagram.com/otsulabs/';
const mainTwitter = 'https://twitter.com/OtsuLabs';

export const siteContent = {
  social: {
    main: [
      {
        name: 'twitter',
        href: mainTwitter,
        icon: (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.808 10.469L20.88 2H19.204L13.062 9.353L8.158 2H2.5L9.918 13.12L2.5 22H4.176L10.662 14.235L15.842 22H21.5L13.808 10.469ZM11.512 13.217L10.76 12.11L4.78 3.3H7.355L12.181 10.41L12.932 11.517L19.205 20.759H16.631L11.512 13.217Z'
              fill='#181717'
            />
          </svg>
        ),
      },
      {
        name: 'instagram',
        href: mainInstagram,
        icon: (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.0269 1.99976C14.1519 2.00276 14.7229 2.00876 15.2159 2.02276L15.4099 2.02976C15.6339 2.03776 15.8549 2.04776 16.1219 2.05976C17.1859 2.10976 17.9119 2.27776 18.5489 2.52476C19.2089 2.77876 19.7649 3.12276 20.3209 3.67776C20.8294 4.17765 21.2228 4.78234 21.4739 5.44976C21.7209 6.08676 21.8889 6.81276 21.9389 7.87776C21.9509 8.14375 21.9609 8.36476 21.9689 8.58976L21.9749 8.78376C21.9899 9.27576 21.9959 9.84676 21.9979 10.9718L21.9989 11.7178V13.0278C22.0013 13.7572 21.9937 14.4866 21.9759 15.2158L21.9699 15.4098C21.9619 15.6348 21.9519 15.8558 21.9399 16.1218C21.8899 17.1868 21.7199 17.9118 21.4739 18.5498C21.2235 19.2175 20.83 19.8224 20.3209 20.3218C19.8208 20.8301 19.2162 21.2235 18.5489 21.4748C17.9119 21.7218 17.1859 21.8898 16.1219 21.9398C15.8846 21.9509 15.6473 21.9609 15.4099 21.9698L15.2159 21.9758C14.7229 21.9898 14.1519 21.9968 13.0269 21.9988L12.2809 21.9998H10.9719C10.2421 22.0023 9.51239 21.9946 8.78287 21.9768L8.58887 21.9708C8.35148 21.9618 8.11414 21.9514 7.87687 21.9398C6.81287 21.8898 6.08687 21.7218 5.44887 21.4748C4.78154 21.2241 4.17709 20.8306 3.67787 20.3218C3.16891 19.822 2.77509 19.2173 2.52387 18.5498C2.27687 17.9128 2.10887 17.1868 2.05887 16.1218C2.04773 15.8845 2.03773 15.6471 2.02887 15.4098L2.02387 15.2158C2.00544 14.4866 1.99711 13.7572 1.99887 13.0278V10.9718C1.99608 10.2424 2.00341 9.51295 2.02087 8.78376L2.02787 8.58976C2.03587 8.36476 2.04587 8.14375 2.05787 7.87776C2.10787 6.81276 2.27587 6.08776 2.52287 5.44976C2.77398 4.78166 3.16859 4.17678 3.67887 3.67776C4.17796 3.16923 4.78201 2.77574 5.44887 2.52476C6.08687 2.27776 6.81187 2.10976 7.87687 2.05976C8.14287 2.04776 8.36487 2.03776 8.58887 2.02976L8.78287 2.02376C9.51206 2.00599 10.2415 1.99832 10.9709 2.00076L13.0269 1.99976ZM11.9989 6.99976C10.6728 6.99976 9.40102 7.52654 8.46334 8.46422C7.52565 9.4019 6.99887 10.6737 6.99887 11.9998C6.99887 13.3258 7.52565 14.5976 8.46334 15.5353C9.40102 16.473 10.6728 16.9998 11.9989 16.9998C13.325 16.9998 14.5967 16.473 15.5344 15.5353C16.4721 14.5976 16.9989 13.3258 16.9989 11.9998C16.9989 10.6737 16.4721 9.4019 15.5344 8.46422C14.5967 7.52654 13.325 6.99976 11.9989 6.99976ZM11.9989 8.99975C12.3928 8.99969 12.783 9.07722 13.147 9.22793C13.511 9.37863 13.8417 9.59955 14.1203 9.87808C14.399 10.1566 14.62 10.4873 14.7708 10.8512C14.9216 11.2152 14.9993 11.6053 14.9994 11.9993C14.9994 12.3932 14.9219 12.7833 14.7712 13.1473C14.6205 13.5113 14.3996 13.8421 14.121 14.1207C13.8425 14.3993 13.5118 14.6204 13.1479 14.7712C12.7839 14.922 12.3938 14.9997 11.9999 14.9998C11.2042 14.9998 10.4412 14.6837 9.87855 14.1211C9.31594 13.5585 8.99987 12.7954 8.99987 11.9998C8.99987 11.2041 9.31594 10.441 9.87855 9.87843C10.4412 9.31582 11.2042 8.99975 11.9999 8.99975M17.2499 5.49976C16.9183 5.49976 16.6004 5.63145 16.366 5.86587C16.1316 6.10029 15.9999 6.41823 15.9999 6.74976C15.9999 7.08128 16.1316 7.39922 16.366 7.63364C16.6004 7.86806 16.9183 7.99975 17.2499 7.99975C17.5814 7.99975 17.8993 7.86806 18.1338 7.63364C18.3682 7.39922 18.4999 7.08128 18.4999 6.74976C18.4999 6.41823 18.3682 6.10029 18.1338 5.86587C17.8993 5.63145 17.5814 5.49976 17.2499 5.49976Z'
              fill='#181717'
            />
          </svg>
        ),
      },
    ],
    ereneAnimation: 'https://www.instagram.com/ereneanimation/',
    theBookOfNouns: 'https://www.instagram.com/thebookofnouns/',
    all: [
      {
        name: 'linkedin',
        href: 'https://www.linkedin.com/company/otsulabs',
      },
      {
        name: 'instagram',
        href: mainInstagram,
      },
      {
        name: 'twitter',
        href: mainTwitter,
      },
      {
        name: 'vimeo',
        href: 'https://vimeo.com/otsulabs',
      },
    ],
  },
  contacts: {
    email: 'contact@otsulabs.com',
  },
  projectsPreview: {
    theWrathOfGods: preview1,
    eris: preview5,
    theBookOfNouns: preview6,
    theDopeShitTypeSlash: preview4,
    systemRPart_1: preview2,
    systemRPart_2: preview3,
  },
  projectsVideo: {
    theWrathOfGods:
      'https://player.vimeo.com/progressive_redirect/playback/949262535/rendition/1080p/file.mp4?loc=external&signature=e40ba77022845833df630bcf23a34bbb091d1005245073e4a1b42db6423faa75',
    eris: 'https://player.vimeo.com/progressive_redirect/playback/928702501/rendition/1080p/file.mp4?loc=external&signature=738cc14fa90bf5869bbc038bb709c1996847212972e67ecb315c0eb384914afd',
    theBookOfNouns:
      'https://player.vimeo.com/progressive_redirect/playback/945822381/rendition/1080p/file.mp4?loc=external&signature=03a29f61bd27eb4cfdd378fa2b5d29d17750bc3f672d7ddbc87fa9d11971d62e',
    theDopeShitTypeSlash:
      'https://player.vimeo.com/progressive_redirect/playback/928702474/rendition/1080p/file.mp4?loc=external&signature=b2374123828f87b5dd4488acea74d2f5b6d9c37d243ee171d3f6f8499ad8f733',
    systemRPart_1:
      'https://player.vimeo.com/progressive_redirect/playback/928702422/rendition/720p/file.mp4?loc=external&signature=3122a40732e4fb9ed32ea39646f91943886a9d9ee39b83735e8a008d3b75b572',
    systemRPart_2:
      'https://player.vimeo.com/progressive_redirect/playback/928702374/rendition/1080p/file.mp4?loc=external&signature=f4143c3626fdf1578a73354b661e4f24933687e0c306845db43ec079ed72930f',
  },
  projectsVideo360Quality: {
    theWrathOfGods:
      'https://player.vimeo.com/progressive_redirect/playback/948012156/rendition/360p/file.mp4?loc=external&signature=6f77f23388b588b7d9975785765ed202e7b0dd7bb3decd0ba6a0636b9d9d71a0',
    eris: 'https://player.vimeo.com/progressive_redirect/playback/948012136/rendition/360p/file.mp4?loc=external&signature=40f0f14d89c987a6a8fc605481b4e75f48f8d24879124b6c68423d74dc8f8929',
    theBookOfNouns:
      'https://player.vimeo.com/progressive_redirect/playback/945822381/rendition/360p/file.mp4?loc=external&signature=6ba4c18dd7c044a90cdf0650a285a034b30bb041fa1401c97e0ff4b120354da0',
    theDopeShitTypeSlash:
      'https://player.vimeo.com/progressive_redirect/playback/948012049/rendition/360p/file.mp4?loc=external&signature=20d6c71c51463d04a989449c7d14fc6597be67aebb4b6d0203a474a7937712c3',
    systemRPart_1:
      'https://player.vimeo.com/progressive_redirect/playback/948012177/rendition/360p/file.mp4?loc=external&signature=542b5d95d93904c05a026d9fbdb40bc8b13741ad83a6b9ded102ec5398b94656',
    systemRPart_2:
      'https://player.vimeo.com/progressive_redirect/playback/948012243/rendition/360p/file.mp4?loc=external&signature=e003a53a561cdb27375d53ef78f099568574d6106f19ecf7073b0d342e651239',
  },
};
