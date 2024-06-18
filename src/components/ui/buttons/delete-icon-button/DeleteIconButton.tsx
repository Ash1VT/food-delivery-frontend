import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteIconButtonProps, EditIconButtonProps } from 'src/pages/manager-panel/manager_panel.types';
import IconButton from '../icon-button/IconButton';

const DeleteIconButton = ({className, onDelete} : DeleteIconButtonProps) => {
    return (
        <IconButton Icon={DeleteIcon} className={className} onClick={onDelete} />
    )
}

export default DeleteIconButton