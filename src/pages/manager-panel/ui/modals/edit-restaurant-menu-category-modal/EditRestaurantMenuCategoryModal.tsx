import React from 'react'
import * as Yup from 'yup'
import { EditRestaurantMenuCategoryModalProps } from 'src/pages/manager-panel/manager_panel.types'
import './edit_restaurant_menu_category_modal.css'
import UploadImageForm from 'src/components/upload-image-form/UploadImageForm'
import FormTable from 'src/components/form-table/FormTable'

interface FormValues {
    name: string
}

const EditRestaurantMenuCategoryModal = ({menuCategory, onMenuCategoryImageUploaded, onMenuCategoryUpdated} : EditRestaurantMenuCategoryModalProps) => {
    const fields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Enter Name'
        }
    ]

    const initialValues: FormValues = {
        name: menuCategory.name
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required')
    })

    const handleMenuCategoryUpdated = async (values: FormValues) => {
        await onMenuCategoryUpdated({
            id: menuCategory.id,
            name: values.name
        })
    }

    const handleMenuCategoryImageUploaded = async (image: File) => {
        await onMenuCategoryImageUploaded(menuCategory.id, image)
    }
    
    return (
        <div className='edit__restaurant__menu__category__modal__container'>
            <div className='edit__restaurant__menu__category__modal__title'>Edit Menu Category</div>
            <div className='edit__restaurant__menu__category__modal__form__wrapper'>
                <UploadImageForm imageUrl={menuCategory.imageUrl} inputId={`menuCategoryImage_${menuCategory.id}`}onImageUploaded={handleMenuCategoryImageUploaded}/>
                <FormTable fields={fields} 
                        initialValues={initialValues} 
                        validationSchema={validationSchema} 
                        onSubmit={handleMenuCategoryUpdated}
                        buttonText='Save'/>
            </div>
        </div>
    )
}

export default EditRestaurantMenuCategoryModal