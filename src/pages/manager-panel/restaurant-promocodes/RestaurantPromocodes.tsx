import React from 'react'
import * as Yup from 'yup'
import EditIcon from '@mui/icons-material/Edit';
import { RestaurantPromocodeProps, RestaurantPromocodesProps } from '../manager_panel.types'
import { Form, Formik, FormikHelpers } from 'formik'
import { addSuccessNotification } from 'src/utils/notifications'
import moment from 'moment'
import EditIconButton from '../../../components/ui/buttons/edit-icon-button/EditIconButton';
import OpenAddingPromocodeButton from '../ui/buttons/open-adding-promocode-button/OpenAddingPromocodeButton';
import { PromocodeCreate, PromocodeUpdate } from 'src/models/promocode.interfaces';
import ModalWindow from 'src/components/modal-window/ModalWindow';
import EditRestaurantPromocodeModal from '../ui/modals/edit-restaurant-promocode-modal/EditRestaurantPromocodeModal';
import AddRestaurantPromocodeModal from '../ui/modals/add-restaurant-promocode-modal/AddRestaurantPromocodeModal';
import './restaurant_promocodes.css'

interface FormValues {
    isActive: boolean
}

const RestaurantPromocode = ({promocode, onPromocodeActivityChanged, onPromocodeUpdated} : RestaurantPromocodeProps) => {

    const initialValues = {
        isActive: promocode.isActive
    }

    const validationSchema = Yup.object().shape({
        isActive: Yup.boolean().required('Activity is required')
    })

    const handleSubmit = async (values: FormValues, { setSubmitting } : FormikHelpers<FormValues>) => {
        // alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
        await onPromocodeActivityChanged(promocode.id, values.isActive)
    }

    const handlePromocodeUpdated = async (promocode: PromocodeUpdate) => {
        await onPromocodeUpdated(promocode)
    }

    return (
        <tr className='restaurant__promocode__tr'>
            <th>
                <div className="restaurant__promocode__text">
                    {promocode.id}
                </div>
            </th>
            <th>
                <div className="restaurant__promocode__text restaurant__promocode__margin__left">
                    {promocode.nameIdentifier}
                </div>
            </th>
            <th>
                <div className="restaurant__promocode__text restaurant__promocode__margin__left">
                    {promocode.discountPercentage}%
                </div>
            </th>
            <th>
                <div className="restaurant__promocode__text restaurant__promocode__margin__left">
                    {moment(promocode.validFrom).format('DD.MM.YYYY')}
                </div>
            </th>
            <th>
                <div className="restaurant__promocode__text restaurant__promocode__margin__left">
                    {moment(promocode.validUntil).format('DD.MM.YYYY')}
                </div>
            </th>
            <th>
                <div className="restaurant__promocode__text restaurant__promocode__margin__left">
                    {promocode.maxUsageCount}
                </div>
            </th>
            <th>
                <div className="restaurant__promocode__text restaurant__promocode__margin__left">
                    {promocode.currentUsageCount}
                </div>
            </th>
            <th>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    {({ errors, values, setFieldValue, submitForm }) => (
                        <Form>
                            <input
                                type="checkbox"
                                name="isPromocodeActive"
                                id='isPromocodeActive'
                                className='restaurant__promocode__activity__checkbox restaurant__promocode__margin__left'
                                checked={values.isActive}
                                onChange={(e) => {
                                    setFieldValue('isActive', e.target.checked)
                                    submitForm()
                                }}
                            />
                            <label className="restaurant__promocode__activity__label" htmlFor="isPromocodeActive"/>
                        </Form>
                    )}
                </Formik>
            </th>
            <th>
                <div className='restaurant__promocode__margin__left'>
                    <ModalWindow button={EditIconButton({})}>
                        <EditRestaurantPromocodeModal promocode={promocode} onPromocodeUpdated={handlePromocodeUpdated} />
                    </ModalWindow>
                </div>
            </th>
        </tr>
    )
}

const RestaurantPromocodes = ({promocodes, restaurantId, onPromocodeActivityChanged, onPromocodeCreated, onPromocodeUpdated} : RestaurantPromocodesProps) => {
    
    const handlePromocodeCreated = async (promocode: PromocodeCreate) => {
        await onPromocodeCreated(promocode)
    }

    return (
        <div>
            <table>
                <tr>
                    <td>
                        <div className="restaurant__promocode__label">
                            ID
                        </div>
                    </td>
                    <td>
                        <div className="restaurant__promocode__label restaurant__promocode__margin__left">
                            Name identifier
                        </div>
                    </td>
                    <td>
                        <div className="restaurant__promocode__label restaurant__promocode__margin__left">
                            Discount
                        </div>
                    </td>
                    <td>
                        <div className="restaurant__promocode__label restaurant__promocode__margin__left">
                            Start date
                        </div>
                    </td>
                    <td>
                        <div className="restaurant__promocode__label restaurant__promocode__margin__left">
                            End date
                        </div>
                    </td>
                    <td>
                        <div className="restaurant__promocode__label restaurant__promocode__margin__left">
                            Max usages
                        </div>
                    </td>
                    <td>
                        <div className="restaurant__promocode__label restaurant__promocode__margin__left">
                            Current usages
                        </div>
                    </td>
                    <td>
                        <div className="restaurant__promocode__label restaurant__promocode__margin__left">
                            Activity
                        </div>
                    </td>
                    <td>
                        <div className="restaurant__promocode__margin__left"/>
                    </td>
                </tr>
                <tr style={{height: '10px'}}/>
                {promocodes.map((promocode) => (
                    <RestaurantPromocode
                        key={promocode.id}
                        onPromocodeUpdated={onPromocodeUpdated}
                        onPromocodeActivityChanged={onPromocodeActivityChanged}
                        promocode={promocode}
                    />
                ))}
            </table>
            <ModalWindow button={OpenAddingPromocodeButton({})}>
                <AddRestaurantPromocodeModal restaurantId={restaurantId} onPromocodeCreated={handlePromocodeCreated} />
            </ModalWindow>
        </div>
    )
}

export default RestaurantPromocodes