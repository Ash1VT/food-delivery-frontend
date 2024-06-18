import React from 'react'
import { DeliveryAddressesCategoryProps } from '../../profile.types';
import DeliveryAddressesTable from '../../delivery-addresses-table/DeliveryAddressesTable';
import OpenAddingAddressButton from '../../ui/buttons/open-adding-address-button/OpenAddingAddressButton';
import ModalWindow from 'src/components/modal-window/ModalWindow';
import AddCustomerAddressModal from '../../ui/modals/add-customer-address-modal/AddCustomerAddressModal';
import './delivery_addresses_category.css'

const DeliveryAddressesCategory = ({currentUser, approvedAddresses, pendingAddresses, rejectedAddresses, onCustomerAddressCreated} : DeliveryAddressesCategoryProps) => {
    return (
        <div className='delivery__addresses__category__container'>
            <div className='delivery__addresses__category__section'>
                <div className='delivery__addresses__category__section__title'>Approved Addresses</div>
                {approvedAddresses.length !== 0 ?
                    <DeliveryAddressesTable addresses={approvedAddresses} />
                :
                    <div className='delivery__addresses__category__section__text'>You haven't got approved addresses</div>
                }
            </div>
            <div className='delivery__addresses__category__section'>
                <div className='delivery__addresses__category__section__title'>Pending Addresses</div>
                {pendingAddresses.length !== 0 ?
                    <DeliveryAddressesTable addresses={pendingAddresses} />
                :
                    <div className='delivery__addresses__category__section__text'>You haven't got pending addresses</div>
                }
            </div>
            <div className='delivery__addresses__category__section'>
                <div className='delivery__addresses__category__section__title'>Rejected Addresses</div>
                {rejectedAddresses.length !== 0 ?
                    <DeliveryAddressesTable addresses={rejectedAddresses} />
                :
                    <div className='delivery__addresses__category__section__text'>You haven't got rejected addresses</div>
                }
            </div>
            <div>
                {currentUser.isEmailVerified && 
                    <ModalWindow button={OpenAddingAddressButton({})}>
                        <AddCustomerAddressModal onCustomerAddressCreated={onCustomerAddressCreated} />
                    </ModalWindow>
                }
            </div>
        </div>
    )
}

export default DeliveryAddressesCategory;