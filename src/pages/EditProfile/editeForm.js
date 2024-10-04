import React from 'react';
import Input from '../../components/UI/input';
import Button from '../../components/UI/button';
import { FormikProvider } from 'formik';
import LoaderRing from '../../components/ringLoader';


const EditeForm = ({
    name, 
    address, 
    company, 
    username, 
    email, 
    phone, 
    formikEditeProfile,
    loader
}) => {

    return ( 
      loader ? <LoaderRing size="100px"/> : (
        <form onSubmit={formikEditeProfile.handleSubmit} className='profile-edite__form'> 
        <FormikProvider value={formikEditeProfile}>
        <h4 >Данные профиля</h4>
               <Input label='Имя' name="name" defaultValue={name}/>
               <Input label='Никнейм' name="username" defaultValue={username}/>
               <Input label='Почта' name="email" type='email' defaultValue={email}/>
               <Input label='Город' name="city" defaultValue={address?.city}/>
               <Input label='Телефон' name="phone" type='tel' defaultValue={phone}/>
               <Input label='Название компании' name="companyName" defaultValue={company?.name}/>  
               <Button  text="Сохранить" type="submit"  disabled={!(formikEditeProfile.isValid && formikEditeProfile.dirty)}/>
        </FormikProvider>
    </form>
      )
    );
};

export default EditeForm;