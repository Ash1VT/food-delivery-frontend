import React from 'react'
import UploadRestaurantImageForm from '../ui/forms/upload_restraurant_image_form/UploadRestaurantImageForm'
import { RestaurantImageProps } from '../manager_panel.types'
import './restaurant_image.css'

const RestaurantImage = ({restaurant, onRestaurantImageUploaded} : RestaurantImageProps) => {
    const handleUploadRestaurantImageClick = async (image: File) => {
        await onRestaurantImageUploaded(restaurant.id, image)
    }
    
    return (
        <div className='restaurant__image__container'>
            <div className="restaurant__image__wrapper">
                <img className="restaurant__image" src={restaurant.imageUrl} alt="image"></img>
            </div>
            <UploadRestaurantImageForm onRestaurantImageUploaded={handleUploadRestaurantImageClick}/>
        </div>
    )
}

export default RestaurantImage