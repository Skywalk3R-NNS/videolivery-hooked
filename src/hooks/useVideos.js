import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

//Input -> default search term
//Output -> list of videos, function that can be used to search for videos
const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search/',{
            params:{
                q:term,
            },
        });

        setVideos(response.data.items);
    };
    
    return [videos, search];
};

export default useVideos;