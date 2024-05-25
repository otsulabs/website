import { useFormContext } from "react-hook-form"
import style from './Input.module.scss';

const Input = ({ name, type = 'text', textarea, rules, error, ...props }) => {
  const { register } = useFormContext();
  return textarea ? (
    <textarea
      className={`${style.input} ${style.textarea}`}
      name={name}
      {...register(name, rules)}
      {...props}
    ></textarea>
  ) : (
    <label className={style.label}>
      <input
        className={style.input}
        type={type}
        name={name}
        {...register(name, rules)}
        {...props}
      />
      {error && <span className={style.error}>This field is required</span>}
    </label>
  );
};

export default Input;
