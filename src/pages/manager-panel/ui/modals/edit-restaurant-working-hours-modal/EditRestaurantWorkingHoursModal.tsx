import React from 'react'
import * as Yup from 'yup'
import { EditRestaurantWorkingHoursModalProps } from 'src/pages/manager-panel/manager_panel.types'
import FormTable from 'src/components/form-table/FormTable'
import './edit_restaurant_working_hours_modal.css'

interface FormValues {
    openingTime: string
    closingTime: string
}

const EditRestaurantWorkingHoursModal = ({workingHours, onWorkingHoursUpdated} : EditRestaurantWorkingHoursModalProps) => {
    const fields = [
        {
            name: 'openingTime',
            label: 'Opening Time',
            type: 'text',
            placeholder: 'Enter Opening Time'
        },
        {
            name: 'closingTime',
            label: 'Closing Time',
            type: 'text',
            placeholder: 'Enter Closing Time'
        }
    ]

    const initialValues: FormValues = {
        openingTime: workingHours.openingTime,
        closingTime: workingHours.closingTime
    }

    const validationSchema = Yup.object().shape({
        openingTime: Yup.string().required('Opening Time is required').matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Opening Time has incorrect format. Example: 08:00'),
        closingTime: Yup.string().required('Closing Time is required').matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Closing Time has incorrect format. Example: 08:00')
    })

    const handleApplicationPublished = async (values: FormValues) => {
        await onWorkingHoursUpdated({
            id: workingHours.id,
            dayOfWeek: workingHours.dayOfWeek,
            openingTime: values.openingTime,
            closingTime: values.closingTime
        })
    }

    return (
        <div className='edit__restaurant__working__hours__modal__container'>
            <div className='edit__restaurant__working__hours__modal__title'>Working Hours For {workingHours.dayOfWeek.charAt(0).toUpperCase() + workingHours.dayOfWeek.slice(1)}</div>
            <FormTable fields={fields} 
                       initialValues={initialValues} 
                       validationSchema={validationSchema} 
                       onSubmit={handleApplicationPublished}
                       buttonText='Save'/>
        </div>
    )
}

export default EditRestaurantWorkingHoursModal