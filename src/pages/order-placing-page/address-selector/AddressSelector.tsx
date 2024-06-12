import React, { useState } from 'react'
import { SelectAddressProps } from '../order_placing_page.types'
import { formatAddress } from 'src/utils/formatAddress';
import './address_selector.css'

const AddressSelector = ({order, addresses, onAddressSelected} : SelectAddressProps) => {
    const [selectedAddressId, setSelectedAddressId] = useState<string | undefined | null>(order.deliveryInformation.destinationAddressId);

    const handleSelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const addressId = event.target.value
        setSelectedAddressId(addressId);
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
              {formatAddress(address)}
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