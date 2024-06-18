import * as Yup from 'yup'
import { EditRestaurantMenuItemModalProps } from 'src/pages/manager-panel/manager_panel.types'
import FormTable from 'src/components/form-table/FormTable'
import UploadImageForm from 'src/components/upload-image-form/UploadImageForm'
import './edit_restaurant_menu_item_modal.css'

interface FormValues {
    name: string
    description?: string
    price: number
}

const EditRestaurantMenuItemModal = ({menuItem, onMenuItemUpdated, onMenuItemImageUploaded} : EditRestaurantMenuItemModalProps) => {
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
        name: menuItem.name,
        description: menuItem.description,
        price: menuItem.price
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        description: Yup.string().optional(),
        price: Yup.number().required('Price is required')
    })

    const handleMenuItemUpdated = async (values: FormValues) => {
        await onMenuItemUpdated({
            id: menuItem.id,
            name: values.name,
            description: values.description,
            price: values.price
        })
    }

    const handleMenuItemImageUploaded = async (image: File) => {
        await onMenuItemImageUploaded(menuItem.id, image)
    }
    
    return (
        <div className='edit__restaurant__menu__item__modal__container'>
            <div className='edit__restaurant__menu__item__modal__title'>Edit Menu Item</div>
            <div className='edit__restaurant__menu__item__modal__form__wrapper'>
                <UploadImageForm imageUrl={menuItem.imageUrl} inputId={`$menuItemImage_${menuItem.id}`} imageContainerClassName='edit__menu__item__image__container' imageClassName='edit__menu__item__image' imageWrapperClassName='edit__menu__item__image__wrapper' onImageUploaded={handleMenuItemImageUploaded}/>
                <FormTable fields={fields} 
                        initialValues={initialValues} 
                        validationSchema={validationSchema} 
                        onSubmit={handleMenuItemUpdated}
                        buttonText='Save'/>
            </div>
        </div>
    )
}

export default EditRestaurantMenuItemModal