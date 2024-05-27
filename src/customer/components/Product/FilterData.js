export const color = [
    "white",
    "Black",
    "Red",
    "marun",
    "Pink",
    "Green",
    "Yellow",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "Black", label: "Black" },
            { value: "Red", label: "Red" },
            { value: "marun", label: "Marun" },
            { value: "Pink", label: "Pink" },
            { value: "Green", label: "Green" },
            { value: "Yellow", label: "Yellow" },
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
            { value: "XL", label: "XL" },
            { value: "XXL", label: "XXL" },
        ],
    },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "0-100", label: "S/0-S/100" },
            { value: "100-200", label: "S/100-S/200" },
            { value: "200-300", label: "S/200-S/300" },
            { value: "300-400", label: "S/300-S/400" },
            { value: "400-500", label: "S/400-S/500" },
        ],
    },
    {
        id: "discount",
        name: "Disccount Range",
        options: [
            { value: "10", label: "10% de descuento" },
            { value: "20", label: "20% de descuento" },
            { value: "30", label: "30% de descuento" },
            { value: "40", label: "40% de descuento" },
            { value: "50", label: "50% de descuento" },
            { value: "60", label: "60% de descuento" },
            { value: "70", label: "70% de descuento" },
            { value: "80", label: "80% de descuento" },
        ],
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "inStock", label: "In Stock" },
            { value: "outOfStock", label: "Out of Stock" },
        ],
    },
];