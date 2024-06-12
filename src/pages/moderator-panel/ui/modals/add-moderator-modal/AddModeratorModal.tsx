import * as Yup from 'yup'
import { AddModeratorModalProps } from 'src/pages/moderator-panel/moderator_panel.types'
import { phoneRegExp } from 'src/constants/phone'
import './add_moderator_modal.css'
import FormTable from 'src/components/form-table/FormTable'

interface FormValues {
    firstName: string
    lastName: string
    phone: string
    birthDate: Date
    email: string
    password: string
    confirmPassword: string
}

const AddModeratorModal = ({onModeratorCreated} : AddModeratorModalProps) => {
    const fields = [
        {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            placeholder: 'Enter First Name'
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            placeholder: 'Enter Last Name'
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'phone',
            placeholder: 'Enter Phone'
        },
        {
            name: 'birthDate',
            label: 'Birth Date',
            type: 'date',
            placeholder: 'Enter Birth Date'
        },
        {
            name: 'email',
            label: 'Email',
            type: 'text',
            placeholder: 'Enter Email'
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Enter Password'
        },
        {
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
            placeholder: 'Enter Confirm Password'
        }
    ]

    const initialValues: FormValues = {
        firstName: '',
        lastName: '',
        phone: '',
        birthDate: new Date(),
        email: '',
        password: '',
        confirmPassword: ''
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        phone: Yup.string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid'),
        birthDate: Yup.date().typeError("Date is not correct").required('Birth Date is required'),
        email: Yup.string().required('Email is required').email('Email is not correct'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password')], 'Passwords must match')
    })

    const handleModeratorCreated = async (values: FormValues) => {
        await onModeratorCreated({
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            birthDate: values.birthDate,
            email: values.email,
            role: 'moderator',
            password: values.password
        })
    }
    
    return (
        <div className='add__moderator__modal__container'>
            <div className='add__moderator__modal__title'>Add Moderator</div>
            <FormTable fields={fields} 
                       initialValues={initialValues} 
                       validationSchema={validationSchema} 
                       onSubmit={handleModeratorCreated}
                       buttonText='Save'/>
        </div>
    )
}

export default AddModeratorModal