import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import ControlledInput from 'src/pages/profile/ui/controlled-input/ControlledInput';
import formatDate from 'src/utils/formatDate';
import FormErrorNotification from 'src/components/form-error-notification/FormErrorNotification';
import UploadImageForm from '../../../components/upload-image-form/UploadImageForm';
import { PersonalInformationProps } from '../profile.types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './personal_information.css'
import CustomButton from 'src/components/ui/buttons/custom-button/CustomButton';

interface FormValues {
    firstName: string;
    lastName: string;
    birthDate: Date;
    phone: string;
}

const PersonalInformation = ({user, onUserImageUploaded, onVerificationEmailSent, onPersonalInformationUpdated} : PersonalInformationProps) => {

    const initialValues: FormValues = {
        firstName: user.firstName,
        lastName: user.lastName,
        birthDate: new Date(user.birthDate),
        phone: user.phone
    }

    const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        birthDate: Yup.date().typeError("Date is not correct").required('Birth Date is required'),
        phone: Yup.string().required('Phone is required'),
    })

    const handleSubmit = async (values: FormValues, { setSubmitting } : FormikHelpers<FormValues>) => {
        setSubmitting(false)
        await onPersonalInformationUpdated({
            id: user.id,
            firstName: values.firstName,
            lastName: values.lastName,
            birthDate: values.birthDate,
            phone: values.phone
        })
    }

    const handleUploadUserImageClick = async (image: File) => {
        await onUserImageUploaded({
            id: user.id,
            image
        })
    }

    const handleVerificationEmailSent = async () => {
        await onVerificationEmailSent()
    }

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
        {({ errors, values, setFieldValue, submitForm }) => {
            return (
                <div className='personal__information__container'>
                    <UploadImageForm imageUrl={user.imageUrl} onImageUploaded={handleUploadUserImageClick} />
                    <Form>
                        <FormErrorNotification/>
                        <div className='personal__information__form__wrapper'>
                            <table className='personal__information__table'>
                                <ControlledInput label='First Name' 
                                                value={values.firstName}
                                                error={errors.firstName}
                                                disableEdit={false}
                                                setValue={firstName => { setFieldValue('firstName', firstName) }}
                                                parseValue={value => value}
                                                convertToString={value => value}
                                                onSave={async () => await submitForm()}>
                                    <input type='text'/>   
                                </ControlledInput>
                                <ErrorMessage name='firstName' component='div' />
                                <ControlledInput label='Last Name' 
                                                value={values.lastName}
                                                error={errors.lastName}
                                                disableEdit={false}
                                                setValue={lastName => { setFieldValue('lastName', lastName) }}
                                                parseValue={value => value}
                                                convertToString={value => value}
                                                onSave={async () => await submitForm()}>
                                    <input type='text'/>   
                                </ControlledInput>
                                <ErrorMessage name='lastName' component='div' />
                                <tr className='controlled__input__row'>
                                    <td>
                                        <div className='controlled__input__label__wrapper'>
                                            <label className='label'>Email</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='value controlled__input__margin__left'>
                                            {user.email}
                                        </div>
                                    </td>
                                </tr>
                                <ControlledInput label='Birth Date' 
                                                value={values.birthDate}
                                                error={errors.birthDate ? String(errors.birthDate) : undefined}
                                                disableEdit={false}
                                                setValue={birthDate => { console.log(birthDate); setFieldValue('birthDate', birthDate) }}
                                                parseValue={value => new Date(value)}
                                                convertToString={value => formatDate(value)}
                                                onSave={async () => await submitForm()}>
                                    <input type='date'/>
                                </ControlledInput>
                                <ErrorMessage name='birthDate' component='div' />

                                <ControlledInput label='Phone' 
                                                value={values.phone}
                                                error={errors.phone}
                                                disableEdit={false}
                                                setValue={phone => { setFieldValue('phone', phone) }}
                                                parseValue={value => value}
                                                convertToString={value => value}
                                                onSave={async () => await submitForm()}>
                                    <input type='tel'/>   
                                </ControlledInput>
                                <ErrorMessage name='phone' component='div' />
                                <tr className='controlled__input__row'>
                                    <td>
                                        <div className='controlled__input__label__wrapper'>
                                            <label className='label'>Is Email Verified</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='value controlled__input__margin__left'>
                                            {user.isEmailVerified ?
                                                    <div>
                                                        <CheckCircleIcon className='personal__information__check__icon'/>
                                                    </div>
                                                : 
                                                <div className='personal__information__cancel__wrapper'>
                                                    <CancelIcon className='personal__information__cancel__icon'/>
                                                    <CustomButton label='Resend verification email' onClick={handleVerificationEmailSent}/>
                                                </div>
                                            }
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </Form>
                </div>
            )}}
        </Formik>
    )
}

export default PersonalInformation