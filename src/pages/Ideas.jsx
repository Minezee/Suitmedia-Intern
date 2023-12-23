import React, { useState, useEffect } from 'react';
import { useGetIdeasData } from '../services/useGetIdeasData';
import ContentLayout from '../layout/ContentLayout';
import { Banner, Card, Pagination } from '../components';
import Dropdown from '../components/Dropdown';

const Ideas = () => {
    const storedPageSize = sessionStorage.getItem('pageSize') || '10';
    const storedSorting = sessionStorage.getItem('sorting') || '-published_at';

    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(parseInt(storedPageSize, 10));
    const [pageSizeOpen, setPageSizeOpen] = useState(false);
    const [sorting, setSorting] = useState(storedSorting);
    const [sortingOpen, setSortingOpen] = useState(false);
    const sortingOptions = [
        { value: '-published_at', label: 'Newest' },
        { value: 'published_at', label: 'Oldest' }
    ];
    const pageSizeOption = [
        { value: '10', label: '10' },
        { value: '20', label: '20' },
        { value: '50', label: '50' },
    ];
    const { data, error, isLoading, refetch } = useGetIdeasData({
        pageNumber,
        pageSize,
        sorting,
    });

    useEffect(() => {
        refetch();
    }, [pageNumber, pageSize, sorting, refetch]);

    useEffect(() => {
        sessionStorage.setItem('pageSize', pageSize.toString());
        sessionStorage.setItem('sorting', sorting);
    }, [pageSize, sorting]);

    return (
        <div>
            <Banner />
            <ContentLayout>
                <div className='flex flex-row items-center justify-between text-lg mb-14'>
                    <p>{`Showing 1-${Math.min(data?.length, pageSize)} of 274`}</p>
                    <div className='flex flex-row gap-10 items-center'>
                        <div className='flex flex-row gap-2 items-center'>
                            <p>Show per page:</p>
                            <Dropdown active={pageSize} setIsActive={setPageSize} option={pageSizeOption} isOpen={pageSizeOpen} setIsOpen={setPageSizeOpen} />
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <p>Sort by:</p>
                            <Dropdown active={sorting} setIsActive={setSorting} option={sortingOptions} isOpen={sortingOpen} setIsOpen={setSortingOpen} />
                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-4 gap-10'>
                    {isLoading ? (
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
                            <div key={data} className='rounded-lg bg-gray-400 animate-pulse h-96'></div>
                        ))
                    ) : (
                        data?.map((item) => (
                            <Card key={item.id} img={item.medium_image[0]?.url} title={item.title} date={item.published_at} />
                        ))
                    )}
                </div>
                <Pagination
                    setPage={setPageNumber}
                    page={pageNumber}
                    pageSize={pageSize}
                />
            </ContentLayout>
        </div>
    );
};

export default Ideas;