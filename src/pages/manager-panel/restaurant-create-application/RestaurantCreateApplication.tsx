import React from 'react'
import * as Yup from 'yup'
import { RestaurantCreateApplicationProps } from '../manager_panel.types'
import { phoneRegExp } from 'src/constants/phone';
import FormTable from 'src/components/form-table/FormTable';
import './restaurant_create_application.css'

interface FormValues {
    name: string;
    description: string;
    email: string;
    address: string;
    phone: string;
}

const RestaurantCreateApplication = ({onRestaurantCreated}: RestaurantCreateApplicationProps) => {
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
            type: 'email',
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
        name: '',
        description: '',
        email: '',
        address: '',
        phone: ''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        description: Yup.string().required('Description is required'),
        email: Yup.string().required('Email is required').email('Email is not correct'),
        address: Yup.string().required('Address is required'),
        phone: Yup.string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid')
    })

    const handleRestaurantCreated = async (values: FormValues) => {
        await onRestaurantCreated({
            name: values.name,
            description: values.description,
            email: values.email,
            address: values.address,
            phone: values.phone
        })
    }

    return (
        <div className='restaurant__create__application__container'>
            <div className='restaurant__create__application__title'>Create Restaurant</div>
            <FormTable fields={fields} 
                    initialValues={initialValues} 
                    validationSchema={validationSchema} 
                    onSubmit={handleRestaurantCreated} 
                    buttonText='Create'/>
        </div>
    )
}

export default RestaurantCreateApplication