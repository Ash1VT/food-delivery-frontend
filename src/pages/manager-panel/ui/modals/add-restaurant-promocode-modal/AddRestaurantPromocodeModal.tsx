import React from 'react'
import * as Yup from 'yup'
import { AddRestaurantPromocodeModalProps } from 'src/pages/manager-panel/manager_panel.types'
import FormTable from 'src/components/form-table/FormTable'
import './add_restaurant_promocode_modal.css'

interface FormValues {
    nameIdentifier: string
    discountPercentage: number
    validFrom: Date
    validUntil: Date
    maxUsageCount: number
}

const AddRestaurantPromocodeModal = ({restaurantId, onPromocodeCreated} : AddRestaurantPromocodeModalProps) => {
    const fields = [
        {
            name: 'nameIdentifier',
            label: 'Name Identifier',
            type: 'text',
            placeholder: 'Enter Name Identifier'
        },
        {
            name: 'discountPercentage',
            label: 'Discount Percentage',
            type: 'number',
            placeholder: 'Enter Discount Percentage'
        },
        {
            name: 'validFrom',
            label: 'Start Date',
            type: 'date',
            placeholder: 'Enter Start Date'
        },
        {
            name: 'validUntil',
            label: 'End Date',
            type: 'date',
            placeholder: 'Enter End Date'
        },
        {
            name: 'maxUsageCount',
            label: 'Max Usage Count',
            type: 'number',
            placeholder: 'Enter Max Usages Count'
        }
    ]

    const initialValues: FormValues = {
        nameIdentifier: '',
        discountPercentage: 0,
        validFrom: new Date(),
        validUntil: new Date(),
        maxUsageCount: 0
    }

    const validationSchema = Yup.object().shape({
        nameIdentifier: Yup.string().required('Name Identifier is required'),
        discountPercentage: Yup.number().required('Discount Percentage is required').min(0, 'Discount Percentage must be greater than 0').max(100, 'Discount Percentage must be less than 100'),
        validFrom: Yup.date().required('Start Date is required'),
        validUntil: Yup.date().required('End Date is required'),
        maxUsageCount: Yup.number().required('Max Usages Count is required')
    })

    const handlePromococeCreated = async (values: FormValues) => {
        await onPromocodeCreated({
            nameIdentifier: values.nameIdentifier,
            discountPercentage: values.discountPercentage,
            validFrom: values.validFrom,
            validUntil: values.validUntil,
            maxUsageCount: values.maxUsageCount,
            restaurantId: restaurantId
        })
    }
    
    return (
        <div className='add__restaurant__promocode__modal__container'>
            <div className='add__restaurant__promocode__modal__title'>Add Promocode</div>
            <FormTable fields={fields} 
                       initialValues={initialValues} 
                       validationSchema={validationSchema} 
                       onSubmit={handlePromococeCreated}
                       buttonText='Save'/>
        </div>
    )
}

export default AddRestaurantPromocodeModal