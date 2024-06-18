export type UploadImageFormProps = {
    imageUrl: string
    inputId: string
    imageContainerClassName?: string
    imageWrapperClassName?: string
    imageClassName?: string
    onImageUploaded: (image: File) => Promise<void>
}