import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../store/users/operations";
import axios from "axios";


const useContainer = () => {

    const { userData, archiveData, loader } = useSelector((state) => state.users);
    const dispatch = useDispatch();
  
    const options = [
        {
            key:"1",
            label: <p >Редактировать</p>,

        },
        {
            key:"2",
            label: <p>Архивировать</p>

        },
        {
            key:"3",
            label: <p>Скрыть</p>

        },
    ]
    const optionsArchive = [
        {
            key:"4",
            label: <p >Активировать</p>,

        }
    ]
    useEffect(() => {
        dispatch(getUser())
    }, [])

    return {
        userData,
        archiveData,
        options,
        optionsArchive,
        loader
    }
}

export default useContainer;