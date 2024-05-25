import { useForm, FormProvider } from 'react-hook-form';
import Button from '../../components/Button';
import File from '../../components/File';
import Input from '../../components/Input';
import style from './Form.module.scss';
import { useEffect, useRef, useState } from 'react';
const baseUrl = process.env.API_URL || 'http://localhost:3000';

const Form = ({ className, type }) => {
  const [fileName, setFileName] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

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
        removeFileInput();
        methods.reset();
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    })
  };

  const [disabledInput, setDisabledInput] = useState(false);
  const handleFileInputName = () => {
    setFileName(fileInputRef.current.files[0].name);
  };
  const removeFileInput = () => {
    if (fileName) {
      setFileName(false);
      fileInputRef.current.value = '';
      let newControl = fileInputRef.current.cloneNode(true);
      fileInputRef.current.replaceWith(newControl);
      fileInputRef.current = newControl;
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
        className={`${style.form} ${className}`}
      >
        <div className={style.form__row}>
          <Input
            placeholder={'Your Name'}
            name={'name'}
            rules={{ required: true }}
            error={methods.formState.errors.name}
            />
          <Input
            placeholder={'Your Email'}
            name={'email'}
            rules={{ required: true }}
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
          className={style.form__file}
          fileName={fileName}
          disabledInput={disabledInput}
        />
        <Button type="submit" loading={loading} className={style.form__btn} title={isSent ? 'Sent' : 'Send now'} />
      </form>
    </FormProvider>
  );
};

export default Form;
