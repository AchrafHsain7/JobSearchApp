import {useState, useEffect } from 'react' 
import axios from 'axios'


const useFecth = (endpoint, querry) => {
    [data, setData] = useState([]);
    [isLoading, setIsLoading] = useState(false);
    [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'd1024c6d2cmshef1f508e8c06eb9p1dcca0jsn1d4d10b09129',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...querry},
        
    };

    const fetchData = async () => {
        setIsLoading(true);

        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch};
}

export default useFecth;
