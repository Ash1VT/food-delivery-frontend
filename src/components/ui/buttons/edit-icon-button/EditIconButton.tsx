import EditIcon from '@mui/icons-material/Edit';
import { EditIconButtonProps } from 'src/pages/manager-panel/manager_panel.types';
import IconButton from '../icon-button/IconButton';

const EditIconButton = ({className, onEdit} : EditIconButtonProps) => {
    return (
        <IconButton Icon={EditIcon} className={className} onClick={onEdit} />
    )
}

export default EditIconButton