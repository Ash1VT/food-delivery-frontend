import React from 'react'
import * as Yup from 'yup'
import FormTable from 'src/components/form-table/FormTable'
import { EditRestaurantInformationModalProps } from 'src/pages/manager-panel/manager_panel.types'
import './edit_restaurant_information_modal.css'

interface FormValues {
    name: string
    description?: string
    email: string
    address: string
    phone: string
}

const EditRestaurantInformationModal = ({restaurant, onRestaurantUpdated} : EditRestaurantInformationModalProps) => {
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
            name: 'email',
            label: 'Email',
            type: 'text',
            placeholder: 'Enter Restaurant Email'
        },
        {
            name: 'address',
            label: 'Address',
            type: 'text',
            placeholder: 'Enter Restaurant Address'
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'phone',
            placeholder: 'Enter Restaurant Phone'
        }
    ]

    const initialValues: FormValues = {
        name: restaurant.name,
        description: restaurant.description,
        email: restaurant.email,
        address: restaurant.address,
        phone: restaurant.phone
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        description: Yup.string(),
        email: Yup.string().email('Invalid email').required('Email is required'),
        address: Yup.string().required('Address is required'),
        phone: Yup.string().required('Phone is required')
    })

    const handleApplicationPublished = async (values: FormValues) => {
        await onRestaurantUpdated({
            id: restaurant.id,
            name: values.name,
            description: values.description,
            email: values.email,
            address: values.address,
            phone: values.phone
        })
    }
    
    return (
        <div className='edit__restaurant__information__modal__container'>
            <div className='edit__restaurant__information__modal__title'>Edit Restaurant Information</div>
            <FormTable fields={fields} 
                       initialValues={initialValues} 
                       validationSchema={validationSchema} 
                       onSubmit={handleApplicationPublished}
                       buttonText='Publish an application'/>
        </div>
    )
}

export default EditRestaurantInformationModal