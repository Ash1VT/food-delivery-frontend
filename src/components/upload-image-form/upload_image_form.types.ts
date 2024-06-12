export type UploadImageFormProps = {
    imageUrl: string
    imageContainerClassName?: string
    imageWrapperClassName?: string
    imageClassName?: string
    onImageUploaded: (image: File) => Promise<void>
}