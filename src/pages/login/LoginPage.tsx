import { useState } from 'react'
import * as Yup from 'yup';
import CustomTextInput from 'src/components/ui/custom-inputs/custom-text-input/CustomTextInput'
import RememberMe from '../../components/ui/remember_me/RememberMe'
import LoginButton from './ui/buttons/login_button/LoginButton'
import CopyrightRounded from '@mui/icons-material/CopyrightRounded'
import { Formik, FormikHelpers } from 'formik';
import { addSuccessNotification } from 'src/utils/notifications';
import FormErrorNotification from 'src/components/form-error-notification/FormErrorNotification';
import './login_page.css'
import Copyright from 'src/components/ui/copyright/Copyright';

interface FormValues {
    email: string;
    password: string;
}

const LoginPage = () => {
    const [isRememberMe, setIsRememberMe] = useState(false)

    const initialValues: FormValues = {
        email: '',
        password: ''
    }

    const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required')
    })

    const handleSubmit = async (values: FormValues, { setSubmitting } : FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
        addSuccessNotification('Login successful')
    }


    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
                                    <a className="login__signup__link" href='#'>Sign up</a>
                                </div>
                                <div className="login__inputs">
                                    <div className="login__email__input">
                                        <CustomTextInput label='Email address' type='email' value={values.email} error={errors.email} setValue={(email: string) => setFieldValue('email', email)}/>
                                    </div>
                                    <div className="login__password__input">
                                        <CustomTextInput label='Password' type='password' value={values.password} error={errors.password} setValue={(password: string) => setFieldValue('password', password)}/>
                                    </div>
                                </div>
                                <div className="login__remember__me__wrapper">
                                    <RememberMe isRememberMe={isRememberMe} setIsRememberMe={setIsRememberMe}/>
                                </div>
                                <div className="login__button__wrapper">
                                    <LoginButton onClick={submitForm}/>
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