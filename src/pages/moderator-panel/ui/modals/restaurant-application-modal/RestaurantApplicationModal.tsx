import React from 'react'
import * as Yup from 'yup'
import { RestaurantApplicationModalProps } from 'src/pages/moderator-panel/moderator_panel.types'
import { phoneRegExp } from 'src/constants/phone'
import FormTable from 'src/components/form-table/FormTable'
import CustomButton from 'src/components/ui/buttons/custom-button/CustomButton'
import './restaurant_application_modal.css'

interface FormValues {
    name: string
    description: string
    address: string
    email: string
    phone: string
}

const RestaurantApplicationModal = ({application, onRestaurantApplicationApproved, onRestaurantApplicationRejected, onRestaurantApplicationUpdated} : RestaurantApplicationModalProps) => {
    const fields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Enter Restaurant Name'
        },
        {
            name: 'description',
            label: 'Description',
            type: 'text',
            placeholder: 'Enter Restaurant Description'
        },
        {
            name: 'address',
            label: 'Address',
            type: 'text',
            placeholder: 'Enter Restaurant Address'
        },
        {
            name: 'email',
            label: 'Email',
            type: 'text',
            placeholder: 'Enter Restaurant Email'
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'phone',
            placeholder: 'Enter Restaurant Phone'
        }
    ]

    const initialValues: FormValues = {
        name: application.name,
        description: application.description,
        address: application.address,
        email: application.email,
        phone: application.phone
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        description: Yup.string().required('Description is required'),
        address: Yup.string().required('Address is required'),
        email: Yup.string().required('Email is required').email('Email is not correct'),
        phone: Yup.string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid')
    })

    const handleRestaurantApplicationUpdated = async (values: FormValues) => {
        await onRestaurantApplicationUpdated({
            id: application.id,
            name: values.name,
            description: values.description,
            address: values.address,
            email: values.email,
            phone: values.phone
        })
    }

    const handleRestaurantApplicationApproved = async () => {
        await onRestaurantApplicationApproved(application.id)
    }

    const handleRestaurantApplicationRejected = async () => {
        await onRestaurantApplicationRejected(application.id)
    }


    return (
        <div className='restaurant__application__modal__container'>
            <div className='restaurant__application__modal__title'>Restaurant Application</div>
            <div className='restaurant__application__modal__form__wrapper'>
                <FormTable fields={fields} 
                        initialValues={initialValues} 
                        validationSchema={validationSchema} 
                        onSubmit={handleRestaurantApplicationUpdated}
                        buttonText='Save'/>
            </div>
            <div className='restaurant__application__modal__buttons__wrapper'>
                <CustomButton className='restaurant__application__modal__approve__button' label='Approve' onClick={handleRestaurantApplicationApproved}/>
                <CustomButton className='restaurant__application__modal__reject__button' label='Reject' onClick={handleRestaurantApplicationRejected}/>
            </div>
        </div>
    )
}

export default RestaurantApplicationModal