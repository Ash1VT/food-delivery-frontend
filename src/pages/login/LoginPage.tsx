import { useEffect, useState } from 'react'
import * as Yup from 'yup';
import CustomTextInput from 'src/components/ui/custom-inputs/custom-text-input/CustomTextInput'
import RememberMe from '../../components/ui/remember_me/RememberMe'
import AuthenticateButton from './ui/buttons/authenticate-button/AuthenticateButton'
import CopyrightRounded from '@mui/icons-material/CopyrightRounded'
import { Formik, FormikHelpers } from 'formik';
import { addErrorNotification, addSuccessNotification } from 'src/utils/notifications';
import FormErrorNotification from 'src/components/form-error-notification/FormErrorNotification';
import Copyright from 'src/components/ui/copyright/Copyright';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch';
import { useAppSelector } from 'src/hooks/redux/useAppSelector';
import { authenticate, fetchCurrentUser } from 'src/redux/actions/user.actions';
import { error } from 'console';
import './login_page.css'

interface FormValues {
    email: string;
    password: string;
}

const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [isRememberMe, setIsRememberMe] = useState(false)
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector(state => state.currentUserReducer)

    const initialValues: FormValues = {
        email: '',
        password: ''
    }

    const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is not correct'),
        password: Yup.string().required('Password is required')
    })

    const handleSubmit = async (values: FormValues, { setSubmitting } : FormikHelpers<FormValues>) => {
        setSubmitting(false)
        dispatch(authenticate({
            email: values.email,
            password: values.password,
            isRemember: isRememberMe
        })).then((response) => {
            if (response.type === 'currentUser/authenticate/fulfilled') {
                dispatch(fetchCurrentUser())
                addSuccessNotification('Login successful')
                navigate('/')
                return
            }

            if (response.type === 'currentUser/authenticate/rejected') {
                addErrorNotification(response.payload as string)
                return
            }
        })
    }
 

    // if (isCurrentUserLoading)
    //     return <div>Loading...</div>

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={false}
        >
        {({ errors, values, setFieldValue, submitForm }) => {
            
            return (
                <>
                    <FormErrorNotification/>
                    <div className='login__container'>
                        <div className="login__wrapper">
                            <div className="login__cart">
                                <div className="login__title">Login</div>
                                <div className="login__signup__wrapper">
                                    <span className="login__dont__have__account">Don't have an account? </span>
                                    <div className="login__signup__links">
                                        <Link className="login__signup__link" to={'/register?role=customer'}>Sign up as customer</Link>
                                        <Link className="login__signup__link" to={'/register?role=courier'}>Sign up as courier</Link>
                                        <Link className="login__signup__link" to={'/register?role=restaurant_manager'}>Sign up as restaurant manager</Link>
                                    </div>
                                </div>
                                <div className="login__inputs">
                                    <div className="login__email__input">
                                        <CustomTextInput label='Email address' type='email' placeholder='Enter Email Address' value={values.email} error={errors.email} setValue={(email: string) => setFieldValue('email', email)}/>
                                    </div>
                                    <div className="login__password__input">
                                        <CustomTextInput label='Password' type='password' placeholder='Enter Password' value={values.password} error={errors.password} setValue={(password: string) => setFieldValue('password', password)}/>
                                    </div>
                                </div>
                                <div className="login__remember__me__wrapper">
                                    <RememberMe isRememberMe={isRememberMe} setIsRememberMe={setIsRememberMe}/>
                                </div>
                                <div className="login__authenticate__button__wrapper">
                                    <AuthenticateButton onClick={submitForm}/>
                                </div>
                                <div className="login__copyright__wrapper">
                                    <Copyright/>
                                </div>
                            </div>
                        </div>
                        <div className="login__image__wrapper">
                            <img className="login__image" src='https://firebasestorage.googleapis.com/v0/b/fooddelivery-21854.appspot.com/o/Images%2Fwelcome_food.png?alt=media&token=e8e67cb5-9967-4d06-a456-b3b50f20dacc'></img>
                        </div>
                    </div>
                </>
            )
        }}
        </Formik>
    )
}

export default LoginPage