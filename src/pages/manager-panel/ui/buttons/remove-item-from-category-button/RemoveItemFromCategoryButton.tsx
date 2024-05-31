import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import { RemoveItemFromCategoryButtonProps } from 'src/pages/manager-panel/manager_panel.types'
import IconButton from '../icon-button/IconButton'

const RemoveItemFromCategoryButton = ({onRemove} : RemoveItemFromCategoryButtonProps) => {
    return (
        <IconButton Icon={RemoveIcon} onClick={onRemove} />
    )
}

export default RemoveItemFromCategoryButton