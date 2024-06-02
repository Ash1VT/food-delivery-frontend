import React from 'react'
import { RestaurantInformationProps } from '../manager_panel.types'
import './restaurant_information.css'
import EditRestaurantInformationButton from '../ui/buttons/edit-restaurant-information-button/EditRestaurantInformationButton'
import UploadRestaurantImageForm from '../ui/forms/upload_restraurant_image_form/UploadRestaurantImageForm'

const RestaurantInformation = ({restaurant, onOpenEditingRestaurantInformation} : RestaurantInformationProps) => {

    const handleOpenEditingRestaurantClick = async () => {
        await onOpenEditingRestaurantInformation(restaurant)
    }

    return (
        <div className="restaurant__information__container">
            <div>
                <table className="restaurant__information__table">
                    <tr className="restaurant__information__table__row">
                        <th className="restaurant__information__table__header">
                            <div className="restaurant__information__label">
                                Name
                            </div>
                        </th>
                        <th className="restaurant__information__table__header restaurant__information__table__header__value">
                            <div className="restaurant__information__text">
                                {restaurant.name}
                            </div>
                        </th>
                    </tr>
                    <tr className="restaurant__information__tr__divider"/>
                    <tr className="restaurant__information__table__row">
                        <th className="restaurant__information__table__header">
                            <div className="restaurant__information__label">
                                Description
                            </div>
                        </th>
                        <th className="restaurant__information__table__header restaurant__information__table__header__value">
                            <div className="restaurant__information__text restaurant__information__description">
                                {restaurant.description}
                            </div>
                        </th>
                    </tr>
                    <tr className="restaurant__information__tr__divider"/>
                    <tr className="restaurant__information__table__row">
                        <th className="restaurant__information__table__header">
                            <div className="restaurant__information__label">
                                Email
                            </div>
                        </th>
                        <th className="restaurant__information__table__header restaurant__information__table__header__value">
                            <div className="restaurant__information__text">
                                {restaurant.email}
                            </div>
                        </th>
                    </tr>
                    <tr className="restaurant__information__tr__divider"/>
                    <tr className="restaurant__information__table__row">
                        <th className="restaurant__information__table__header">
                            <div className="restaurant__information__label">
                                Address
                            </div>
                        </th>
                        <th className="restaurant__information__table__header restaurant__information__table__header__value">
                            <div className="restaurant__information__text">
                                {restaurant.address}
                            </div>
                        </th>
                    </tr>
                    <tr className="restaurant__information__tr__divider"/>
                    <tr className="restaurant__information__table__row">
                        <th className="restaurant__information__table__header">
                            <div className="restaurant__information__label">
                                Phone
                            </div>
                        </th>
                        <th className="restaurant__information__table__header restaurant__information__table__header__value">
                            <div className="restaurant__information__text">
                                {restaurant.phone}
                            </div>
                        </th>
                    </tr>
                </table>
            </div>
            <EditRestaurantInformationButton onEdit={handleOpenEditingRestaurantClick}/>
        </div>
    )
}

export default RestaurantInformation