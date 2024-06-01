import React from 'react'
import './customer_addresses.css'
import { CustomerAddressProps, CustomerAddressesProps } from '../moderator_panel.types'
import OpenShowAddressDetailsButton from '../ui/buttons/open-show-address-details-button/OpenShowAddressDetailsButton'
import SearchComponent from 'src/components/ui/search-component/SearchComponent'

const CustomerAddress = ({ address, onOpenShowDetailsAddress }: CustomerAddressProps) => {
  
    const handleOpenAddressDetails = async () => {
        await onOpenShowDetailsAddress(address)
    }

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
                    <OpenShowAddressDetailsButton onOpen={handleOpenAddressDetails}/>
                </div>
            </td>
        </tr>
    )

}

const CustomerAddresses = ({addresses, onSearchAddressesByCustomer, onSearchAddressesByRegion, onSearchAddressesByCountry, onSearchAddressesByDetails, onOpenShowDetailsAddress} : CustomerAddressesProps) => {
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
                            onOpenShowDetailsAddress={onOpenShowDetailsAddress}
                        />
                        <tr style={{height: '10px'}}/>
                    </React.Fragment>
                ))}
            </table>
        </div>
    )
}

export default CustomerAddresses