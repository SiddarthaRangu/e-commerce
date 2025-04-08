import React from 'react';
import { useState, useContext} from 'react';      

const PaginationContext = React.createContext();

export default function PaginationProvider({ children }) {
    const [pageNum, setPageNum] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(4);

    const pageProps={
        pageNum,
        setPageNum,
        pageSize,
        setPageSize
    }
    return (
        <PaginationContext.Provider value={pageProps}>
            {children}
        </PaginationContext.Provider>
    )
}
export const usePaginationContext = () => React.useContext(PaginationContext);