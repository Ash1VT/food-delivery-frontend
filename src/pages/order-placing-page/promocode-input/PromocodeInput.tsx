import React, { useState } from 'react'
import { PromocodeInputProps } from '../order_placing_page.types';
import { addErrorNotification, addSuccessNotification } from 'src/utils/notifications';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './promocode_input.css'
import ApplyPromocodeButton from '../ui/buttons/apply-promocode-button/ApplyPromocodeButton';

const PromocodeInput = ({order, onPromocodeApplied} : PromocodeInputProps) => {
    const promocodeName = order.priceInformation.promocodeName ? order.priceInformation.promocodeName : '';

    const [promocode, setPromocode] = useState(promocodeName);
    const isApplied = promocodeName !== '';

    const handleApplyClick = async () => {
        await onPromocodeApplied(promocode)
    };
  
    return (
        <div className="promocode__container">
          <div className="promocode__input__group">
            <input
              type="text"
              className="promocode__input"
              value={promocode}
              onChange={(e) => setPromocode(e.target.value)}
              placeholder="Enter promocode"
            />
            {isApplied && <CheckCircleIcon className="promocode__success" />}
            <ApplyPromocodeButton isApplied={isApplied} onPromocodeApplied={handleApplyClick} />
          </div>
        </div>
      );
};

export default PromocodeInput