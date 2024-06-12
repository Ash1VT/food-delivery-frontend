import React from 'react'
import * as Yup from 'yup'
import { CustomerAddressModalProps } from 'src/pages/moderator-panel/moderator_panel.types'
import './customer_address_modal.css'
import FormTable from 'src/components/form-table/FormTable'
import CustomButton from 'src/components/ui/buttons/custom-button/CustomButton'

interface FormValues {
    country: string
    region: string
    details: string
}

const CustomerAddressModal = ({address, onCustomerAddressApproved, onCustomerAddressRejected, onCustomerAddressUpdated} : CustomerAddressModalProps) => {
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
        country: address.country,
        region: address.region,
        details: address.details
    }

    const validationSchema = Yup.object().shape({
        country: Yup.string().required('Country is required'),
        region: Yup.string().required('Region is required'),
        details: Yup.string().required('Details is required')
    })

    const handleCustomerAddressUpdated = async (values: FormValues) => {
        await onCustomerAddressUpdated({
            id: address.id,
            country: values.country,
            region: values.region,
            details: values.details
        })
    }

    const handleCustomerAddressApproved = async () => {
        await onCustomerAddressApproved(address.id)
    }

    const handleCustomerAddressRejected = async () => {
        await onCustomerAddressRejected(address.id)
    }


    return (
        <div className='customer__address__modal__container'>
            <div className='customer__address__modal__title'>Customer Address Application</div>
            <div className='customer__address__modal__form__wrapper'>
                <FormTable fields={fields} 
                        initialValues={initialValues} 
                        validationSchema={validationSchema} 
                        onSubmit={handleCustomerAddressUpdated}
                        buttonText='Save'/>
            </div>
            <div className='customer__address__modal__buttons__wrapper'>
                <CustomButton className='customer__address__modal__approve__button' label='Approve' onClick={handleCustomerAddressApproved}/>
                <CustomButton className='customer__address__modal__reject__button' label='Reject' onClick={handleCustomerAddressRejected}/>
            </div>
        </div>
    )
}

export default CustomerAddressModal