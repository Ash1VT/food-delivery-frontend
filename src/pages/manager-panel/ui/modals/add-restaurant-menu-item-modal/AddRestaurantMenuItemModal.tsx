import * as Yup from 'yup'
import { AddRestaurantMenuItemModalProps } from 'src/pages/manager-panel/manager_panel.types'
import './add_restaurant_menu_item_modal.css'
import FormTable from 'src/components/form-table/FormTable'
import UploadImageForm from 'src/components/upload-image-form/UploadImageForm'

interface FormValues {
    name: string
    description?: string
    price: number
}

const AddRestaurantMenuItemModal = ({restaurantId, onMenuItemCreated} : AddRestaurantMenuItemModalProps) => {
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
        },
        {
            name: 'price',
            label: 'Price',
            type: 'number',
            placeholder: 'Enter Price'
        }
    ]

    const initialValues: FormValues = {
        name: '',
        description: '',
        price: 0
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        description: Yup.string().required('Description is required'),
        price: Yup.number().required('Price is required')
    })

    const handleMenuItemCreated = async (values: FormValues) => {
        await onMenuItemCreated({
            name: values.name,
            description: values.description,
            price: values.price,
            restaurantId: restaurantId
        })
    }
    
    return (
        <div className='add__restaurant__menu__item__modal__container'>
            <div className='add__restaurant__menu__item__modal__title'>Add Menu Item</div>
            <FormTable fields={fields} 
                       initialValues={initialValues} 
                       validationSchema={validationSchema} 
                       onSubmit={handleMenuItemCreated}
                       buttonText='Save'/>
        </div>
    )
}

export default AddRestaurantMenuItemModal