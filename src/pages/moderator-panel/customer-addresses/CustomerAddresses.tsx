import React from 'react'
import './customer_addresses.css'
import { CustomerAddressProps, CustomerAddressesProps } from '../moderator_panel.types'
import OpenShowAddressDetailsButton from '../ui/buttons/open-show-address-details-button/OpenShowAddressDetailsButton'
import SearchComponent from 'src/components/ui/search-component/SearchComponent'
import ModalWindow from 'src/components/modal-window/ModalWindow'
import CustomerAddressModal from '../ui/modals/customer-address-modal/CustomerAddressModal'

const CustomerAddress = ({ address, onAddressUpdated, onAddressApproved, onAddressRejected }: CustomerAddressProps) => {
  
    return (
        <tr className='customer__address__row'>
            <td className='customer__address__column'>
                <div className="customer__address__text">
                    {address.id}
                </div>
            </td>
            <td className='customer__address__column'>
                <div className="customer__address__text customer__address__margin__left">
                    {address.customer?.fullName}
                </div>
            </td>
            <td className='customer__address__column'>
                <div className="customer__address__text customer__address__margin__left">
                    {address.country}
                </div>
            </td>
            <td className='customer__address__column'>
                <div className="customer__address__text customer__address__margin__left">
                    {address.country}
                </div>
            </td>
            <td className='customer__address__column'>
                <div className="customer__address__text customer__address__margin__left">
                    {address.details}
                </div>
            </td>
            <td className='customer__address__column'>
                <div className="customer__address__text customer__address__margin__left">
                    {address.approvalStatus}
                </div>
            </td>
            <td className='customer__address__column'>
                <div className="customer__address__buttons__wrapper customer__address__margin__left">
                    <ModalWindow button={OpenShowAddressDetailsButton({})}>
                        <CustomerAddressModal address={address} 
                                              onCustomerAddressUpdated={onAddressUpdated} 
                                              onCustomerAddressApproved={onAddressApproved} 
                                              onCustomerAddressRejected={onAddressRejected}/>
                    </ModalWindow>
                </div>
            </td>
        </tr>
    )

}

const CustomerAddresses = ({addresses, onSearchAddressesByCustomer, onSearchAddressesByRegion, onSearchAddressesByCountry, onSearchAddressesByDetails, onCustomerAddressApproved, onCustomerAddressRejected, onCustomerAddressUpdated} : CustomerAddressesProps) => {
    return (
        <div className="customer__addresses__container">
            <div className='customer__addresses__filters__wrapper'>
                <SearchComponent searchPlaceholder='Search by customer' onSearch={onSearchAddressesByCustomer}/>
                <SearchComponent searchPlaceholder='Search by country' onSearch={onSearchAddressesByCountry}/>
                <SearchComponent searchPlaceholder='Search by region' onSearch={onSearchAddressesByRegion}/>
                <SearchComponent searchPlaceholder='Search by details' onSearch={onSearchAddressesByDetails}/>
            </div>
            <table className="customer__address__table">
                <tr>
                    <th>
                        <div className="customer__address__label">
                            ID
                        </div>
                    </th>
                    <th>
                        <div className="customer__address__label customer__address__margin__left">
                            Customer
                        </div>
                    </th>
                    <th>
                        <div className="customer__address__label customer__address__margin__left">
                            Country
                        </div>
                    </th>
                    <th>
                        <div className="customer__address__label customer__address__margin__left">
                            Region
                        </div>
                    </th>
                    <th>
                        <div className="customer__address__label customer__address__margin__left">
                            Details
                        </div>
                    </th>
                    <th>
                        <div className="customer__address__label customer__address__margin__left">
                            Status
                        </div>
                    </th>
                    <th>
                        <div className="customer__address__margin__left"/>
                    </th>
                </tr>
                <tr style={{height: '20px'}}/>
                {addresses.map((address) => (
                    <React.Fragment key={address.id}>
                        <CustomerAddress
                            address={address}
                            onAddressUpdated={onCustomerAddressUpdated}
                            onAddressApproved={onCustomerAddressApproved}
                            onAddressRejected={onCustomerAddressRejected}
                        />
                        <tr style={{height: '10px'}}/>
                    </React.Fragment>
                ))}
            </table>
        </div>
    )
}

export default CustomerAddresses