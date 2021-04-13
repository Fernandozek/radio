import React from 'react';
import PageTemplate from '../PageTemplate';

export default function Error404(){
    return(
        <PageTemplate
            topBar={true}
        >
            <h1>Error 404 - Page not found</h1>
        </PageTemplate>
    );
}