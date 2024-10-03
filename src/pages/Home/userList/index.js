import { isEmpty } from "lodash";
import EmptyData from "../../../components/emptyData";
import UserCard from "../../../components/userCard";

const UserList = ({
    list,
    imgUrl,
    options,
    title,
    archive=false
})=>{

    return (
      
           <div className="home__active-block">
           <h2 className="title-semibold">{title}</h2>
           <div className="home__active-users">
           {!isEmpty(list) ? (list?.map((user)=>(
                <UserCard 
                key={user?.id}
                imgUrl={imgUrl} 
                name={user?.name} 
                address={user?.address?.city}
                companyName={user?.company.name}
                options={options}
                id={user.id}
                archive={archive}
                />
            ))) : <EmptyData/>}
           </div>
           </div>
    )
}

export default UserList;