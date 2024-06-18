import React, { useCallback } from 'react'
import { DeliveryAddressesTableProps } from '../profile.types'
import { formatCustomerAddress } from 'src/utils/formatCustomerAddress'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { Scrollbar } from 'react-scrollbars-custom';
import { CustomerAddress } from 'src/models/customerAddress.interfaces';
import './delivery_addresses_table.css'

const DeliveryAddressesTable = ({addresses} : DeliveryAddressesTableProps) => {

    const renderAddressIcon = useCallback((address: CustomerAddress) => {
        if (address.approvalStatus === 'approved') {
            return <CheckCircleRoundedIcon className='delivery__address__approved__icon'/>
        }

        if (address.approvalStatus === 'rejected') {
            return <CancelRoundedIcon className='delivery__address__rejected__icon'/>
        }

        if (address.approvalStatus === 'pending') {
            return <HelpRoundedIcon className='delivery__address__pending__icon'/>
        }

        return null
    }, [addresses])

    return (
        <table className='delivery__addresses__table'>
            {addresses.map((address) => (
                <tr className='delivery__addresses__row'>
                    <td>
                        <div className='delivery__address__text'>
                            {formatCustomerAddress(address)}
                        </div>
                    </td>
                    <td>
                        <div className='delivery__address__icon__wrapper delivery__address__margin__left'>
                            {renderAddressIcon(address)}
                        </div>
                    </td>
                </tr>
            ))}
        </table>
    )
}

export default DeliveryAddressesTable