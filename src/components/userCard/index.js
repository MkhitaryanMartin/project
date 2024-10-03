import React from 'react';
import MoreIcon from '../SVG/moreIcon';
import Dropdown from '../UI/dropdown';
import { useDispatch } from 'react-redux';
import { activeUserdata, setUsersData } from '../../store/users';
import "./style.scss"
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const UserCard = ({
    name = "",
    companyName = "",
    address = "",
    imgUrl,
    options,
    id,
    archive
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onClick = (key) => {
        switch (key) {
            case "2":
                dispatch(setUsersData({ id, archive: true }));
                break;
            case "3":
                dispatch(setUsersData({ id, archive: false }));
                break;
                case "4":
                    dispatch(activeUserdata(id));
                    break;
            default: 
            navigate("profile-edite")
            
        }
    }
    return (
        <div  className={classNames('user-card', { 'user-card--active': archive})}>
            <div className='user-card__left-block'>
                <img src={imgUrl} alt='user' />
            </div>
            <div className='user-card__right-block'>
                <div className='user-card__info'>
                    <div className='user-card__names-block'>
                        <div className='user-card__first-line'>
                            <h3>{name}</h3>
                            <Dropdown options={options} onClick={onClick}>
                                <MoreIcon />
                            </Dropdown>
                        </div>
                        <p>{companyName}</p>
                    </div>
                    <p className='user-card__address'>{address}</p>
                </div>

            </div>
        </div>
    );
};

export default UserCard;