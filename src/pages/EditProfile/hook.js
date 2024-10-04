import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProfile, patchProfile } from "../../store/profile/operations";
import { useFormik } from "formik";
import { editeProfilevalidationSchema } from "../../utils/yupScheme";

const useContainer = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { profile, loader, patchLoader } = useSelector((state) => state.profile);
    const navigate = useNavigate();

    const onNavigate = () => {
        navigate(-1);
    }

    const formikEditeProfile = useFormik({
        initialValues: {
            name: profile?.name || '',
            username: profile?.username || '',
            email: profile?.email || '',
            phone: profile?.phone || '',
            city: profile?.address?.city || '',
            companyName: profile?.company?.name || '',
        },
        validationSchema: editeProfilevalidationSchema,
        enableReinitialize: true,
        onSubmit: (values, { setSubmitting }) => {
            dispatch(patchProfile({ id, data: values }));
            setSubmitting(false); 
        },
    });

    useEffect(() => {
        dispatch(getProfile(id));
    }, [dispatch, id]);

   

    return {
        profile,
        loader,
        formikEditeProfile,
        patchLoader,
        onNavigate
    };
};

export default useContainer;
