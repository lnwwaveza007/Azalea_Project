export interface Plant {
    id: number;
   name: string;
    img: string;
    price: number; 
}

const plants: Plant[] = [
    {
        id: 1,
        name: "Lady Valentine",
        img: "https://thelilypot.co.nz/cdn/shop/files/PhotoRoom_20240203_102844_1_300x300.jpg?v=1706925640",
        price: 15.00
    },
    {
        id: 2,
        name: "Poppy",
        img: "https://silverfallsseed.com/wp-content/uploads/2016/01/Red-Poppy-tower-2017-43.jpg",
        price: 5.00
    },
    {
        id: 3,
        name: "Poppy",
        img: "https://silverfallsseed.com/wp-content/uploads/2016/01/Red-Poppy-tower-2017-43.jpg",
        price: 5.00
    }
]

export default plants;