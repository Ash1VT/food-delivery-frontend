import React from 'react'
import * as Yup from 'yup'
import { EditRestaurantPromocodeModalProps } from 'src/pages/manager-panel/manager_panel.types'
import './edit_restaurant_promocode_modal.css'
import FormTable from 'src/components/form-table/FormTable'

interface FormValues {
    discountPercentage: number
    validFrom: Date
    validUntil: Date
    maxUsageCount: number
}

const EditRestaurantPromocodeModal = ({promocode, onPromocodeUpdated} : EditRestaurantPromocodeModalProps) => {
    const fields = [
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
        discountPercentage: promocode.discountPercentage,
        validFrom: promocode.validFrom,
        validUntil: promocode.validUntil,
        maxUsageCount: promocode.maxUsageCount
    }

    const validationSchema = Yup.object().shape({
        discountPercentage: Yup.number().required('Discount Percentage is required').min(0, 'Discount Percentage must be greater than 0').max(100, 'Discount Percentage must be less than 100'),
        validFrom: Yup.date().required('Start Date is required'),
        validUntil: Yup.date().required('End Date is required'),
        maxUsageCount: Yup.number().required('Max Usages Count is required')
    })

    const handlePromococeUpdated = async (values: FormValues) => {
        await onPromocodeUpdated({
            id: promocode.id,
            discountPercentage: values.discountPercentage,
            validFrom: values.validFrom,
            validUntil: values.validUntil,
            maxUsageCount: values.maxUsageCount
        })
    }
    
    return (
        <div className='edit__restaurant__promocode__modal__container'>
            <div className='edit__restaurant__promocode__modal__title'>Edit Promocode</div>
            <FormTable fields={fields} 
                       initialValues={initialValues} 
                       validationSchema={validationSchema} 
                       onSubmit={handlePromococeUpdated}
                       buttonText='Save'/>
        </div>
    )
}

export default EditRestaurantPromocodeModal