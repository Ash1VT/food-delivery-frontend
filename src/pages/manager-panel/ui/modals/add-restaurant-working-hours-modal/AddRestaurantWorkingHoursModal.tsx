import * as Yup from 'yup'
import { AddRestaurantWorkingHoursModalProps } from 'src/pages/manager-panel/manager_panel.types'
import FormTable from 'src/components/form-table/FormTable'
import './add_restaurant_working_hours_modal.css'

interface FormValues {
    openingTime: string
    closingTime: string
}

const AddRestaurantWorkingHoursModal = ({dayOfWeek, restaurantId, onWorkingHoursCreated} : AddRestaurantWorkingHoursModalProps) => {
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
        openingTime: '',
        closingTime: ''
    }

    const validationSchema = Yup.object().shape({
        openingTime: Yup.string().required('Opening Time is required').matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Opening Time has incorrect format. Example: 08:00'),
        closingTime: Yup.string().required('Closing Time is required').matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Closing Time has incorrect format. Example: 08:00')
    })

    const handleApplicationPublished = async (values: FormValues) => {
        await onWorkingHoursCreated({
            dayOfWeek: dayOfWeek,
            openingTime: values.openingTime,
            closingTime: values.closingTime,
            restaurantId: restaurantId
        })
    }

    return (
        <div className='add__restaurant__working__hours__modal__container'>
            <div className='add__restaurant__working__hours__modal__title'>Working Hours For {dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}</div>
            <FormTable fields={fields} 
                    initialValues={initialValues} 
                    validationSchema={validationSchema} 
                    onSubmit={handleApplicationPublished}
                    buttonText='Save'/>
        </div>
    )
}

export default AddRestaurantWorkingHoursModal