
import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const  [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, {signal: controller.signal});
                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.statusText}`);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
        return () => controller.abort();
    }, [url])
    return {data, loading};
}

export default useFetch;