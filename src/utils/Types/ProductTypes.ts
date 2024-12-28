export default class ProductType {
    id?: number
    name?: string
    description?: string
    price?: string
    quantity?: number
    image?: string
    review?: number
    isPromotion?: boolean
    promotionPrice?: number
    reviewNumber?: number
    options?: [
        {
            id: number,
            image: string,
            color: string,
            isSelected?: boolean,
            size: [
                {
                    id: number,
                    size: string,
                }
            ],
            imagesUrl: [
                {
                    id: number,
                    imageUrl: string,
                },
            ]
        },
    ]
}