import React from 'react';
import GenericCarousel from './Carousel';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

const product_list = [
    {
        id: '1000',
        name: 'Bamboo Watch',
        image: '111.png',
        price: 65,
        inventoryStatus: 'INSTOCK'
    },
    {
        id: '1000',
        name: 'Bamboo Watch',
        image: '222.png',
        price: 65,
        inventoryStatus: 'INSTOCK'
    },
    // more items...
];

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK': return 'success';
        case 'LOWSTOCK': return 'warning';
        case 'OUTOFSTOCK': return 'danger';
        default: return null;
    }
};

const productTemplate = (product) => (
    <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
            <img id='prod-carousel-item' src={`./src/assets/${product.image}`} alt={product.name} className="w-6 shadow-2" />
        </div>
        <div>
            <h4 className="mb-1">{product.name}</h4>
            <h6 className="mt-0 mb-3">${product.price}</h6>
            <Tag value={product.inventoryStatus} severity={getSeverity(product.inventoryStatus)} />
            <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                <Button icon="pi pi-search" rounded />
                <Button icon="pi pi-star-fill" rounded severity="success" />
            </div>
        </div>
    </div>
);

const responsiveOptions = [
    { breakpoint: '1400px', numVisible: 1, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
];

export default function ProductCarouselHome() {
    return (
        <>
        <h1 style={{ textAlign: 'center' }}>Our Featured Products:</h1>
        <GenericCarousel
            items={product_list}
            itemTemplate={productTemplate}
            responsiveOptions={responsiveOptions}
        />
        </>
    );
}
