import React from 'react';
import profileImg from "../../assets/img/profile.png";
import Category from '../../components/category';
import { Route, Routes } from 'react-router-dom';
import useContainer from './hook';
import BackArrowIcon from '../../components/SVG/backArrowIcon';
import EditeForm from './editeForm';
import Loader from '../../components/loader';
import "./style.scss";
import EmptyData from '../../components/emptyData';
import { isEmpty } from 'lodash';

const EditeProfile = () => {
    const { profile, loader, formikEditeProfile, patchLoader, onNavigate} = useContainer();
console.log(!isEmpty(profile))
    return (
        <div className='profile-edite'>
            {loader ? <Loader size="50px"/> : (
              !isEmpty(profile) ?  <>
              <button className='profile-edite__back-button' onClick={onNavigate}>
                  <BackArrowIcon />
                  <span> Назад</span>
              </button>
              <div className='profile-edite__sections'>
                  <div className='profile-edite__left-block'>
                      <img src={profileImg} alt='user' />
                      <div className='profile-edite__akordeons'>
                          <Category text="Данные профиля" href="" />
                          <Category text="Рабочее пространство" href="workspace" />
                          <Category text="Приватность" href="privacy" />
                          <Category text="Безопасность" href="safety" />
                      </div>
                  </div>
                  <div className='profile-edite__right-block'>
                      <Routes>
                          <Route index element={<EditeForm {...profile} loader={patchLoader} formikEditeProfile={formikEditeProfile} />} />
                          <Route path='workspace' element={<EmptyData/>} />
                          <Route path='privacy' element={<EmptyData/>} />
                          <Route path='safety' element={<EmptyData/>} />
                      </Routes>
                  </div>
              </div>
          </>: <EmptyData/>
            )}
        </div>
    );
};

export default EditeProfile;