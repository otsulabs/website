import { useForm, FormProvider } from 'react-hook-form';
import Button from '../../components/Button';
import File from '../../components/File';
import Title from '../../components/Title';
import Input from '../../components/Input';
import style from './Form.module.scss';
import { useEffect, useRef, useState } from 'react';
const baseUrl = process.env.API_URL || 'https://otsulabs-serverless.vercel.app';

const Form = ({ className, type }) => {
  const [fileName, setFileName] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSent, setIsSent] = useState(false);
  const fileAccepts = ['image/jpeg', 'image/jpg', 'application/pdf'];

  const fileInputRef = useRef();
  const methods = useForm();
  const onSubmit = async (data) => {
    if (!type || isSent) return

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('type', type);
    formData.append('message', data.message);
    formData.append('attachment', fileInputRef.current.files[0]);
    setLoading(true);
    fetch(`${baseUrl}/contact`, {
      method: 'POST',
      body: formData,
    }).then(async (response) => {
      const responseParsed = await response.json();
      if (responseParsed.success) {
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 2000);
        removeFileInput();
        methods.reset();
        return;
      }
      return Promise.reject(responseParsed.message);
    })
    .catch((error) => {
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const [disabledInput, setDisabledInput] = useState(false);
  const handleFileInputName = () => {
    if (fileInputRef.current.files && fileInputRef.current.files[0]) {
      const file = fileInputRef.current.files[0];
      if (fileAccepts.includes(file.type)) {
        setFileName(fileInputRef.current.files[0].name);
        setError('');
      } else {
        setError('Please select correct file format(.jpg, png, pdf)');
      }
    }
  };
  const removeFileInput = () => {
    if (fileName) {
      setFileName(false);
      fileInputRef.current.value = '';
      // let newControl = fileInputRef.current.cloneNode(true);
      // fileInputRef.current.replaceWith(newControl);
      // fileInputRef.current = newControl;
      setError('');
    }
  };

  useEffect(() => {
    setDisabledInput(fileName ? true : false);
  }, [fileName]);

  return (
    <FormProvider {...methods}>
      <form
        action=''
        onSubmit={methods.handleSubmit(onSubmit)}
        className={`${style.form} ${className} ${style['small-margin-bottom']} ${error ? style.error : ''}`}
      >
        <div className={style.form__row}>
          <Input
            placeholder={'Your Name'}
            name={'name'}
            rules={{ required: 'This field is required' }}
            error={methods.formState.errors.name}
            />
          <Input
            placeholder={'Your Email'}
            name={'email'}
            rules={{
              required: 'This field is required',
              validate: {
                matchPattern: (v) =>/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v) || 'Please write correct email address',
              }
            }}
            error={methods.formState.errors.email}
          />
        </div>
        <Input
          placeholder={'Write a message here'}
          name={'message'}
          rules={{}}
          textarea
        />
        <File
          handleRemove={removeFileInput}
          onChange={handleFileInputName}
          refEl={fileInputRef}
          accept={fileAccepts.join(', ')}
          className={style.form__file}
          fileName={fileName}
          disabledInput={disabledInput}
        />
        {/* {
          error && <Title.H6>
            <Title.Row>
              {error}
            </Title.Row>
          </Title.H6>
        } */}
        <Button type="submit" className={style.form__btn} title={'Send now'} />
      </form>
      <Title.H6>
        <Title.Row>
          { loading ? 'Sending...' : isSent ? 'Thank you for reaching out! We will be in touch shortly.' : error ? error : '' }
        </Title.Row>
      </Title.H6>
    </FormProvider>
  );
};

export default Form;
