import React from 'react'
import { RestaurantApplicationProps, RestaurantApplicationsProps } from '../moderator_panel.types'
import OpenShowApplicationDetailsButton from '../ui/buttons/open-show-application-details-button/OpenShowApplicationDetailsButton'
import './restaurant_applications.css'

const RestaurantApplication = ({application, onOpenShowDetailsApplication} : RestaurantApplicationProps) => {

    const handleOpenApplicationDetails = async () => {
        await onOpenShowDetailsApplication(application)
    }

    return (
        <tr className='restaurant__application__row'>
            <td className='restaurant__application__column'>
                <div className="restaurant__application__text">
                    {application.id}
                </div>
            </td>
            <td className='restaurant__application__column'>
                <div className="restaurant__application__text restaurant__application__margin__left">
                    {application.type}
                </div>
            </td>
            <td className='restaurant__application__column'>
                <div className="restaurant__application__text restaurant__application__margin__left">
                    {application.name}
                </div>
            </td>
            <td className='restaurant__application__column'>
                <div className="restaurant__application__text restaurant__application__margin__left">
                    {application.email}
                </div>
            </td>
            <td className='restaurant__application__column'>
                <div className="restaurant__application__text restaurant__application__margin__left">
                    {application.address}
                </div>
            </td>
            <td className='restaurant__application__column'>
                <div className="restaurant__application__text restaurant__application__margin__left">
                    {application.phone}
                </div>
            </td>
            <td className='restaurant__application__column'>
                <div className="restuarant__application__buttons__wrapper restaurant__application__margin__left">
                    <OpenShowApplicationDetailsButton onOpen={handleOpenApplicationDetails}/>
                </div>
            </td>
        </tr>
    )
}

const RestaurantApplications = ({applications, onOpenShowDetailsApplication} : RestaurantApplicationsProps) => {
    return (
        <div className="restaurant__applications__container">
            <table className='restaurant__applications__table'>
                <tr>
                    <th>
                        <div className="restaurant__application__label">
                            ID
                        </div>
                    </th>
                    <th>
                        <div className="restaurant__application__label restaurant__application__margin__left">
                            Type
                        </div>
                    </th>
                    <th>
                        <div className="restaurant__application__label restaurant__application__margin__left">
                            Name
                        </div>
                    </th>
                    <th>
                        <div className="restaurant__application__label restaurant__application__margin__left">
                            Email
                        </div>
                    </th>
                    <th>
                        <div className="restaurant__application__label restaurant__application__margin__left">
                            Address
                        </div>
                    </th>
                    <th>
                        <div className="restaurant__application__label restaurant__application__margin__left">
                            Phone
                        </div>
                    </th>
                    <th>
                        <div className="restaurant__application__margin__left"/>
                    </th>
                </tr>
                <tr style={{height: '20px'}}/>
                {applications.map((application) => (
                    <React.Fragment key={application.id}>
                        <RestaurantApplication
                            application={application}
                            onOpenShowDetailsApplication={onOpenShowDetailsApplication}
                        />
                        <tr style={{height: '10px'}}/>
                    </React.Fragment>
                ))}
            </table>
        </div>
    )
}

export default RestaurantApplications