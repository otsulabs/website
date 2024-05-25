import { Link } from 'react-router-dom';
import style from './Button.module.scss';
import Spinner from '../Spinner';

const Button = ({
  title,
  className,
  light,
  social,
  icon,
  href,
  onClick,
  to,
  loading
}) => {
  const cls = `
   ${style.button}  
   ${light && style.light} 
   ${social && style.social}    
   ${className}
   ${loading && style.loading}`;

  return href ? (
    <a href={href} target='_blank' rel='noreferrer' className={cls}>
      <div className={style.circle}></div>
      <span>
        {title}
        {icon}
      </span>
    </a>
  ) : to ? (
    <Link to={to} onClick={onClick} className={cls}>
      <div className={style.circle}></div>
      <span>
        {title}
        {icon}
      </span>
    </Link>
  ) : (
    <button onClick={onClick} className={cls}>
      <div className={style.circle}></div>
      <span>
        {
          loading ? <Spinner size={8} /> : ''
        }
        {title}
        {icon}
      </span>
    </button>
  );
};

export default Button;
