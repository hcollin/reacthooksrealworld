import {useState, useEffect} from 'react';

function useRest(url, options, defaultValue = null) {
    
    const [data, setData] = useState(defaultValue);
    const [fetchState, setFetchState] = useState(0);

    function reload() {
        setData(defaultValue);
        setFetchState(0);
    }

    useEffect(() => {
        if (fetchState === 0) {
            setFetchState(1);
            fetch(url, options)
                .then(res => res.json())
                .then(jsonRes => {
                    setData(jsonRes);
                    setFetchState(2);
                });
        }
    });

    return[data, reload];
}
