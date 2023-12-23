import APIInstance from '../API';
import { useQuery } from 'react-query';

const useGetIdeasData = ({ pageNumber, pageSize, sorting }) => {
    return useQuery('ideas', async () => {
        const response = await APIInstance.get('ideas', {
            params: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                append: ['small_image', 'medium_image'],
                sort: sorting
            }
        });
        return response.data.data;
    });
};

export { useGetIdeasData };