import * as Yup from 'yup'
import { EditUserModalProps } from 'src/pages/moderator-panel/moderator_panel.types'
import { phoneRegExp } from 'src/constants/phone'
import './edit_user_modal.css'
import FormTable from 'src/components/form-table/FormTable'
import UploadImageForm from 'src/components/upload-image-form/UploadImageForm'

interface FormValues {
    firstName: string
    lastName: string
    phone: string
    birthDate: Date
}

const EditUserModal = ({user, onUserUpdated, onUserImageUploaded} : EditUserModalProps) => {
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
        }

    ]

    const initialValues: FormValues = {
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        birthDate: new Date(user.birthDate)
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        phone: Yup.string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid'),
        birthDate: Yup.date().typeError("Date is not correct").required('Birth Date is required'),
    })

    const handleUserUpdated = async (values: FormValues) => {
        await onUserUpdated({
            id: user.id,
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            birthDate: values.birthDate
        })
    }

    const handleUserImageUploaded = async (file: File) => {
        await onUserImageUploaded(user.id, file)
    }
    
    return (
        <div className='edit__user__modal__container'>
            <div className='edit__user__modal__title'>Edit User</div>
            <div className='edit__user__modal__form__wrapper'>
                <UploadImageForm imageUrl={user.imageUrl} onImageUploaded={handleUserImageUploaded}/>
                <FormTable fields={fields} 
                        initialValues={initialValues} 
                        validationSchema={validationSchema} 
                        onSubmit={handleUserUpdated}
                        buttonText='Save'/>
            </div>
        </div>
    )
}

export default EditUserModal