import React, { useEffect, useState ,useRef} from 'react'
import {useDebounce} from './useDebounce'

export default function TaskH() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const inputRef = useRef(null)

    const deBouncedValue = useDebounce(search,800)

    const handleInputSearch = (e) => {
        inputRef.current.focus()
        setSearch(e.target.value)
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => (res.json()))
            .then((data) => setData(data)
            )
            .catch((err) => (console.log("Error is : ", err)
            ))
    }, [])
    const filterData = (data, search) => {
        return (
        data.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        }))
    }
const newFilterData = filterData(data, deBouncedValue);
//    console.log(newFilterData);
   
    return (
        <>
            <div className="container">
                <div className="container">
                    <input type="text" value={search} onChange={handleInputSearch} ref={inputRef}/>
                </div>
                {
                    newFilterData.map((item, index) => {
                        return (
                            <div className="container" key={index}>
                                <h2>Name : {item.name}</h2>
                                <p>Email : {item.email}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
