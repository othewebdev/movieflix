import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';


export default function Browse() {
    // we need the series and the films 
    const { series } = useContent('series');
    const { films } = useContent('films');
    // we need slides
    const slides = selectionFilter({ series, films });

    // pass it to the browse container 

    return (
        <BrowseContainer slides={slides} />
    )
}