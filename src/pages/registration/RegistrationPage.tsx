import { useState } from 'react'
import * as Yup from 'yup';
import CustomTextInput from 'src/components/ui/custom-inputs/custom-text-input/CustomTextInput'
import RememberMe from '../../components/ui/remember_me/RememberMe'
import CopyrightRounded from '@mui/icons-material/CopyrightRounded'
import { Formik, FormikHelpers } from 'formik';
import { addSuccessNotification } from 'src/utils/notifications';
import FormErrorNotification from 'src/components/form-error-notification/FormErrorNotification';
import SignupButton from './ui/buttons/registration_button/SignupButton';
import './registration_page.css'
import Copyright from 'src/components/ui/copyright/Copyright';
import formatDate from 'src/utils/formatDate';
import PhoneInput from 'react-phone-input-2';
import CustomDateInput from 'src/components/ui/custom-inputs/custom-date-input/CustomDateInput';
import CustomPhoneInput from 'src/components/ui/custom-inputs/custom-phone-input/CustomPhoneInput';

interface FormValues {
    firstName: string
    lastName: string
    email: string
    birthDate: Date
    phone: string
    password: string
    confirmPassword: string
}

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const RegistrationPage = () => {
    const [isRememberMe, setIsRememberMe] = useState(false)

    const initialValues: FormValues = {
        firstName: '',
        lastName: '',
        email: '',
        birthDate: new Date(),
        phone: '',
        password: '',
        confirmPassword: ''
    }

    const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().required('Email is required').email('Email is not correct'),
        birthDate: Yup.date().typeError("Date is not correct").required('Birth Date is required'),
        phone: Yup.string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password')], 'Passwords must match')
    })

    const handleSubmit = async (values: FormValues, { setSubmitting } : FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
        addSuccessNotification('Registration successful. Email with activation link has been sent to your email address.')
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
                    <div className='registration__container'>
                        <div className="registration__wrapper">
                            <div className="registration__cart">
                                <div className="registration__title">Sign up</div>
                                <div className="registration__signup__wrapper">
                                    <span className="registration__dont__have__account">Already have an account? </span>
                                    <a className="registration__signup__link" href='#'>Log in</a>
                                </div>
                                <div className="registration__inputs">
                                    <div className="registration__first__name__input">
                                        <CustomTextInput label='First name' type='text' error={errors.firstName} value={values.firstName} setValue={(firstName: string) => setFieldValue('firstName', firstName)}/>
                                    </div>
                                    <div className="registration__last__name__input">
                                        <CustomTextInput label='Last name' type='text' error={errors.lastName} value={values.lastName} setValue={(lastName: string) => setFieldValue('lastName', lastName)}/>
                                    </div>
                                    <div className="registration__email__input">
                                        <CustomTextInput label='Email address' type='email' error={errors.email} value={values.email} setValue={(email: string) => setFieldValue('email', email)}/>
                                    </div>
                                    <div className="registration__birth__date__input">
                                        <CustomDateInput label='Birth date' error={errors.birthDate} value={values.birthDate} setValue={(birthDate: Date) => setFieldValue('birthDate', birthDate)}/>
                                    </div>
                                    <div className="registration__phone__input">
                                        <CustomPhoneInput label='Phone number' country='by' error={errors.phone} value={values.phone} setValue={(phone: string) => setFieldValue('phone', phone)}/>
                                    </div>
                                    <div className="registration__password__input">
                                        <CustomTextInput label='Password' type='password' error={errors.password} value={values.password} setValue={(password: string) => setFieldValue('password', password)}/>
                                    </div>
                                    <div className="registration__confirm__password__input">
                                        <CustomTextInput label='Confirm password' type='password' error={errors.confirmPassword} value={values.confirmPassword} setValue={(password: string) => setFieldValue('confirmPassword', password)}/>
                                    </div>
                                </div>
                                <div className="registration__remember__me__wrapper">
                                    <RememberMe isRememberMe={isRememberMe} setIsRememberMe={setIsRememberMe}/>
                                </div>
                                <div className="registration__button__wrapper">
                                    <SignupButton onClick={submitForm}/>
                                </div>
                                <div className="registration__copyright__wrapper">
                                    <Copyright/>
                                </div>
                            </div>
                        </div>
                        <div className="registration__image__wrapper">
                            <img className="registration__image" src='https://firebasestorage.googleapis.com/v0/b/fooddelivery-21854.appspot.com/o/Images%2Fwelcome_food.png?alt=media&token=e8e67cb5-9967-4d06-a456-b3b50f20dacc'></img>
                        </div>
                    </div>
                </>
            )
        }}
        </Formik>
    )
}

export default RegistrationPage