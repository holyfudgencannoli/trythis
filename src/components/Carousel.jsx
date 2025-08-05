import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';

export default function GenericCarousel({ items, itemTemplate, fallback = [], responsiveOptions, numVisible = 1, numScroll = 1 }) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        if (items && items.length > 0) {
            setContent(items);
        } else {
            setContent(fallback);
        }
    }, [items, fallback]);

    return (
        <div className="card center-carousel">
            <Carousel
                value={content}
                numVisible={numVisible}
                numScroll={numScroll}
                responsiveOptions={responsiveOptions}
                itemTemplate={itemTemplate}
                circular
            />
        </div>
    );
}
