import React, { useState } from 'react'
import { SelectAddressProps } from '../order_placing_page.types'
import { formatCustomerAddress } from 'src/utils/formatCustomerAddress';
import './address_selector.css'

const AddressSelector = ({order, addresses, onAddressSelected} : SelectAddressProps) => {
    const selectedAddressId = addresses.find(address => formatCustomerAddress(address) === order.deliveryInformation.destinationAddress)?.id ?? null

    const handleSelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const addressId = event.target.value
        await onAddressSelected(addressId);
    };

    // const selectedAddress = addresses.find(address => address.id === selectedAddressId) || null;


    return (
      <div className="address__selector__container">
        <select
          className="address__selector__dropdown"
          onChange={handleSelect} value={selectedAddressId ?? ''}>
          <option className="address__selector__option" value="" disabled>---</option>
          {addresses.map((address) => (
            <option className="address__selector__option" key={address.id} value={address.id}>
              {formatCustomerAddress(address)}
            </option>
          ))}
        </select>
        {/* {selectedAddress && (
          <div>
            <h3>Selected Address</h3>
            <p>{selectedAddress.street}</p>
            <p>{selectedAddress.city}, {selectedAddress.state} {selectedAddress.zip}</p>
          </div> */}
        {/* )} */}
      </div>
    )
}

export default AddressSelector