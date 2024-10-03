import React from 'react';
import userImg from "../../assets/img/user.png";
import Input from '../../components/UI/input';
import "./style.scss";
import Button from '../../components/UI/button';

const EditeProfile = () => {
    return (
        <div className='profile-edite'>
            <button className='profile-edite__back-button headline-semibold'>Назад</button>
            <div className='profile-edite__sections'>
                <div className='profile-edite__left-block'>
                    <img src={userImg} alt='user' />
                    <div className='profile-edite__akordeons'>
                        <h4>Данные профиля</h4>
                        <Input />
                        <Input />
                        <Input />
                    </div>
                </div>
                <div className='profile-edite__right-block'>
                    <h4 className='title-semibold'>Данные профиля</h4>
                    <Input label='Имя'/>
                    <Input label='Никнейм'/>
                    <Input label='Почта'/>
                    <Input label='Город'/>
                    <Input label='Телефон'/>
                    <Input label='Название компании'/>  
                    <Button text="Сохранить"/>
                </div>
            </div>
        </div>
    );
};

export default EditeProfile;