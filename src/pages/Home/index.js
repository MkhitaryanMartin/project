import useContainer from "./hook";
import userImg from "../../assets/img/user.png"
import UserList from "./userList/index.js";
import Loader from "../../components/loader/index.js";
import "./style.scss"

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