
import CrossIcon from "../../components/SVG/crossIcon.js";
import FavoriteIcon from "../../components/SVG/favoriteIcon.js";
import MoreIcon from "../../components/SVG/moreIcon.js";
import NotificationIcon from "../../components/SVG/notificationIcon.js";
import Button from "../../components/UI/button";
import Dropdown from "../../components/UI/dropdown/index.js";
import Input from "../../components/UI/input/index.js";
import UserCard from "../../components/userCard/index.js";
import useContainer from "./hook";
import userImg from "../../assets/img/user.png"
import "./style.scss"
import UserList from "./userList/index.js";
import { PacmanLoader } from "react-spinners";
import Loader from "../../components/loader/index.js";

const Home = ()=>{
   const {
    userData,
     archiveData, 
     options,
     optionsArchive,
     loader
    } = useContainer();
  
    return (
        <div className="home">
    {loader ? <Loader size={50}/> : (
        <>
         <UserList
     title="Активные"
     imgUrl={userImg} 
     options={options}
     list={userData}
     />
     <UserList
     title="Архив"
     imgUrl={userImg} 
     options={optionsArchive}
     list={archiveData}
     archive={true}
     />
        </>
    )}
         
        </div>
    )
}

export default Home;