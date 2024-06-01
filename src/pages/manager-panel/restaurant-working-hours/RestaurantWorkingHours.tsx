import React from 'react'
import { RestaurantDayWorkingHoursProps, RestaurantWorkingHoursProps } from '../manager_panel.types'
import findWorkingHours from 'src/utils/findWorkingHours'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import IWorkingHours from 'src/redux/models/IWorkingHours'
import DeleteIconButton from '../../../components/ui/buttons/delete-icon-button/DeleteIconButton';
import EditIconButton from '../../../components/ui/buttons/edit-icon-button/EditIconButton';
import './restaurant_working_hours.css'

const getStringWorkingHours = (workingHours?: IWorkingHours) => {
    return workingHours ? `${workingHours.openingTime} - ${workingHours.closingTime}` : 'Day off'
}

const RestaurantDayWorkingHours = ({dayOfWeek, workingHours, onOpenEditingWorkingHours, onDeleteWorkingHours} : RestaurantDayWorkingHoursProps) => {

    const handleOpenEditingWorkingHours = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        await onOpenEditingWorkingHours(workingHours)
    }

    const handleDeleteWorkingHours = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        await onDeleteWorkingHours((workingHours as IWorkingHours).id)
    }

    return (
        <tr className="restaurant__working__hours__row">
            <th className='restaurant__working__hours__column'>
                <div className="restaurant__working__hours__label">
                    {workingHours ? workingHours.dayOfWeek : dayOfWeek}
                </div>
            </th>
            <th className='restaurant__working__hours__column'>
                <div className="restaurant__working__hours__text">
                    {getStringWorkingHours(workingHours)}
                </div>
            </th>
            <th className='restaurant__working__hours__column'>
                <div className='restaurant__working__hours__buttons'>
                    <EditIconButton onEdit={handleOpenEditingWorkingHours}/>
                    {workingHours &&
                    <DeleteIconButton onDelete={handleDeleteWorkingHours}/>
                    }
                </div>
            </th>
        </tr>
    )
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const RestaurantWorkingHours = ({workingHours, onOpenEditingWorkingHours, onDeleteWorkingHours} : RestaurantWorkingHoursProps) => {
    return (
        <div>
            <table>
                {daysOfWeek.map((dayOfWeek) => {
                    const dayWorkingHours = findWorkingHours(workingHours, dayOfWeek)
                    return (
                        <RestaurantDayWorkingHours
                            key={dayOfWeek}
                            dayOfWeek={dayOfWeek}
                            workingHours={dayWorkingHours}
                            onOpenEditingWorkingHours={onOpenEditingWorkingHours}
                            onDeleteWorkingHours={onDeleteWorkingHours}
                        />
                    )
                })}
            </table>
        </div>
    )
}

export default RestaurantWorkingHours