import React from 'react'
import * as Yup from 'yup'
import EditIcon from '@mui/icons-material/Edit';
import { RestaurantPromocodeProps, RestaurantPromocodesProps } from '../manager_panel.types'
import { Form, Formik, FormikHelpers } from 'formik'
import { addSuccessNotification } from 'src/utils/notifications'
import moment from 'moment'
import './restaurant_promocodes.css'
import IPromocode from 'src/redux/models/IPromocode';
import EditIconButton from '../ui/buttons/edit-icon-button/EditIconButton';
import OpenAddingPromocodeButton from '../ui/buttons/open-adding-promocode-button/OpenAddingPromocodeButton';

interface FormValues {
    isActive: boolean
}

const RestaurantPromocode = ({promocode, onPromocodeActivityChanged, onOpenEditingPromocode} : RestaurantPromocodeProps) => {

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

    const handleEditClick = async () => {
        await onOpenEditingPromocode(promocode)
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
                    <EditIconButton onEdit={handleEditClick}/>
                </div>
            </th>
        </tr>
    )
}

const RestaurantPromocodes = ({promocodes, onPromocodeActivityChanged, onOpenAddingPromocode, onOpenEditingPromocode} : RestaurantPromocodesProps) => {

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
                        onOpenEditingPromocode={onOpenEditingPromocode}
                        onPromocodeActivityChanged={onPromocodeActivityChanged}
                        promocode={promocode}
                    />
                ))}
            </table>
            <OpenAddingPromocodeButton onOpen={onOpenAddingPromocode}/>
        </div>
    )
}

export default RestaurantPromocodes