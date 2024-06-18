import React from 'react'
import * as Yup from 'yup'
import { AddRestaurantMenuModalProps } from 'src/pages/manager-panel/manager_panel.types'
import './add_restaurant_menu_modal.css'
import FormTable from 'src/components/form-table/FormTable'

interface FormValues {
    name: string,
    description?: string
}

const AddRestaurantMenuModal = ({restaurantId, onMenuCreated} : AddRestaurantMenuModalProps) => {
    const fields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Enter Name'
        },
        {
            name: 'description',
            label: 'Description',
            type: 'text',
            placeholder: 'Enter Description'
        }
    ]

    const initialValues: FormValues = {
        name: '',
        description: ''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        description: Yup.string().optional(),
    })

    const handleMenuCreated = async (values: FormValues) => {
        await onMenuCreated({
            name: values.name,
            description: values.description,
            restaurantId: restaurantId,
        })
    }
    
    return (
        <div className='add__restaurant__menu__modal__container'>
            <div className='add__restaurant__menu__modal__title'>Add Menu</div>
            <FormTable fields={fields} 
                       initialValues={initialValues} 
                       validationSchema={validationSchema} 
                       onSubmit={handleMenuCreated}
                       buttonText='Save'/>
        </div>
    )
}

export default AddRestaurantMenuModal