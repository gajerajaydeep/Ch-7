import React, { useEffect, useState } from 'react'

function useDebounce(search, delay) {
    const [debounceValue, setDebounceValue] = useState(search);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(search)
        }, delay)

        return () => clearTimeout(timer)
    }, [search, delay])

    return debounceValue;
}
export  {useDebounce}