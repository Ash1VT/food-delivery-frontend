import * as Yup from 'yup'
import { AddRestaurantMenuCategoryModalProps } from 'src/pages/manager-panel/manager_panel.types'
import './add_restaurant_menu_category_modal.css'
import FormTable from 'src/components/form-table/FormTable'

interface FormValues {
    name: string
}

const AddRestaurantMenuCategoryModal = ({menuId, onMenuCategoryCreated} : AddRestaurantMenuCategoryModalProps) => {
    const fields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Enter Name'
        }
    ]

    const initialValues: FormValues = {
        name: '',
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required')
    })

    const handleMenuCategoryCreated = async (values: FormValues) => {
        await onMenuCategoryCreated({
            name: values.name,
            menuId: menuId
        })
    }
    
    return (
        <div className='add__restaurant__menu__category__modal__container'>
            <div className='add__restaurant__menu__category__modal__title'>Add Menu Category</div>
            <FormTable fields={fields} 
                       initialValues={initialValues} 
                       validationSchema={validationSchema} 
                       onSubmit={handleMenuCategoryCreated}
                       buttonText='Save'/>
        </div>
    )
}

export default AddRestaurantMenuCategoryModal