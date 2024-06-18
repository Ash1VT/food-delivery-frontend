import React from 'react'
import UploadRestaurantImageForm from '../ui/forms/upload_restraurant_image_form/UploadRestaurantImageForm'
import { RestaurantImageProps } from '../manager_panel.types'
import UploadImageForm from 'src/components/upload-image-form/UploadImageForm'
import './restaurant_image.css'

const RestaurantImage = ({restaurant, onRestaurantImageUploaded} : RestaurantImageProps) => {
    const handleUploadRestaurantImageClick = async (image: File) => {
        await onRestaurantImageUploaded(restaurant.id, image)
    }
    
    return (
        <UploadImageForm inputId='restaurantImage' imageContainerClassName='restaurant__image__container' imageWrapperClassName='restaurant__image__wrapper' imageClassName='restaurant__image' imageUrl={restaurant.imageUrl} onImageUploaded={handleUploadRestaurantImageClick} />
    )
}

export default RestaurantImage