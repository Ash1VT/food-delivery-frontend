import { RestaurantInformationProps } from '../manager_panel.types'
import OpenEditingRestaurantInformationButton from '../ui/buttons/open-editing-restaurant-information-button/OpenEditingRestaurantInformationButton'
import ModalWindow from 'src/components/modal-window/ModalWindow'
import EditRestaurantInformationModal from '../ui/modals/edit-restaurant-information-modal/EditRestaurantInformationModal'
import './restaurant_information.css'

const RestaurantInformation = ({restaurant, onRestaurantUpdated} : RestaurantInformationProps) => {

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
            <ModalWindow button={OpenEditingRestaurantInformationButton({})}>
                <EditRestaurantInformationModal restaurant={restaurant} onRestaurantUpdated={onRestaurantUpdated} />
            </ModalWindow>
        </div>
    )
}

export default RestaurantInformation