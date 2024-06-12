import React from 'react'
import * as Yup from 'yup'
import { AddCustomerAddressModalProps } from 'src/pages/profile/profile.types'
import FormTable from 'src/components/form-table/FormTable'
import './add_customer_address_modal.css'

interface FormValues {
    country: string
    region: string
    details: string
}

const AddCustomerAddressModal = ({onCustomerAddressCreated} : AddCustomerAddressModalProps) => {
    const fields = [
        {
            name: 'country',
            label: 'Country',
            type: 'text',
            placeholder: 'Enter Country'
        },
        {
            name: 'region',
            label: 'Region',
            type: 'text',
            placeholder: 'Enter Region'
        },
        {
            name: 'details',
            label: 'Details',
            type: 'text',
            placeholder: 'Enter Address Details'
        }
    ]

    const initialValues: FormValues = {
        country: '',
        region: '',
        details: ''
    }

    const validationSchema = Yup.object().shape({
        country: Yup.string().required('Country is required'),
        region: Yup.string().required('Region is required'),
        details: Yup.string().required('Details is required')
    })

    const handleCustomerAddressCreated = async (values: FormValues) => {
        await onCustomerAddressCreated({
            country: values.country,
            region: values.region,
            details: values.details
        })
    }


    return (
        <div className='add__customer__address__modal__container'>
            <div className='add__customer__address__modal__title'>Add Customer Address</div>
            <FormTable fields={fields} 
                    initialValues={initialValues} 
                    validationSchema={validationSchema} 
                    onSubmit={handleCustomerAddressCreated}
                    buttonText='Save'/>
        </div>
    )
}

export default AddCustomerAddressModal