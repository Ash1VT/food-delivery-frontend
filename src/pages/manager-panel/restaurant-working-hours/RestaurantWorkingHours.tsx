import React from 'react'
import { RestaurantDayWorkingHoursProps, RestaurantWorkingHoursProps } from '../manager_panel.types'
import findWorkingHours from 'src/utils/findWorkingHours'
import DeleteIconButton from '../../../components/ui/buttons/delete-icon-button/DeleteIconButton';
import EditIconButton from '../../../components/ui/buttons/edit-icon-button/EditIconButton';
import ModalWindow from 'src/components/modal-window/ModalWindow';
import EditRestaurantWorkingHoursModal from '../ui/modals/edit-restaurant-working-hours-modal/EditRestaurantWorkingHoursModal';
import AddRestaurantWorkingHoursModal from '../ui/modals/add-restaurant-working-hours-modal/AddRestaurantWorkingHoursModal';
import { WorkingHours } from 'src/models/workingHours.interfaces';
import './restaurant_working_hours.css'

const getStringWorkingHours = (workingHours?: WorkingHours) => {
    return workingHours ? `${workingHours.openingTime} - ${workingHours.closingTime}` : 'Day off'
}

const RestaurantDayWorkingHours = ({dayOfWeek, restaurantId, workingHours, onWorkingHoursCreated, onWorkingHoursUpdated, onWorkingHoursDeleted} : RestaurantDayWorkingHoursProps) => {

    // const handleOpenEditingWorkingHours = async (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault()
    //     await onOpenEditingWorkingHours(workingHours)
    // }

    const handleWorkingHoursDeleted = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        await onWorkingHoursDeleted((workingHours as WorkingHours).id)
    }

    return (
        <tr className="restaurant__working__hours__row">
            <th className='restaurant__working__hours__column'>
                <div className="restaurant__working__hours__label">
                    {dayOfWeek}
                </div>
            </th>
            <th className='restaurant__working__hours__column'>
                <div className="restaurant__working__hours__text">
                    {getStringWorkingHours(workingHours)}
                </div>
            </th>
            <th className='restaurant__working__hours__column'>
                <div className='restaurant__working__hours__buttons'>
                    {workingHours ? 
                        (
                        <ModalWindow button={EditIconButton({})}>
                            <EditRestaurantWorkingHoursModal workingHours={workingHours} onWorkingHoursUpdated={onWorkingHoursUpdated} />
                        </ModalWindow>
                        )
                        : 
                        (
                        <ModalWindow button={EditIconButton({})}>
                            <AddRestaurantWorkingHoursModal dayOfWeek={dayOfWeek} restaurantId={restaurantId} onWorkingHoursCreated={onWorkingHoursCreated}/>
                        </ModalWindow>
                        )
                    }
                    {workingHours &&
                    <DeleteIconButton onDelete={handleWorkingHoursDeleted}/>
                    }
                </div>
            </th>
        </tr>
    )
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const RestaurantWorkingHours = ({workingHours, restaurantId, onWorkingHoursCreated, onWorkingHoursUpdated, onWorkingHoursDeleted} : RestaurantWorkingHoursProps) => {
    return (
        <div>
            <table>
                {daysOfWeek.map((dayOfWeek) => {
                    const dayWorkingHours = findWorkingHours(workingHours, dayOfWeek)
                    return (
                        <RestaurantDayWorkingHours
                            key={dayOfWeek}
                            dayOfWeek={dayOfWeek}
                            restaurantId={restaurantId}
                            workingHours={dayWorkingHours}
                            onWorkingHoursCreated={onWorkingHoursCreated}
                            onWorkingHoursUpdated={onWorkingHoursUpdated}
                            onWorkingHoursDeleted={onWorkingHoursDeleted}
                        />
                    )
                })}
            </table>
        </div>
    )
}

export default RestaurantWorkingHours