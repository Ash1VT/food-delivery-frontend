import React from 'react'
import IconButton from '../icon-button/IconButton'
import AddIcon from '@mui/icons-material/Add';
import { AddIconButtonProps } from 'src/pages/manager-panel/manager_panel.types'

const AddIconButton = ({className, onAdd} : AddIconButtonProps) => {
    return (
        <IconButton Icon={AddIcon} className={className} onClick={onAdd} />
    )
}

export default AddIconButton