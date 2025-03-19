import { useEffect, useState } from "react"
import { CircleLoader } from 'react-spinners'

const WithLoader = (HOC) => {
    const innerComponent = () => {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            setTimeout(() => {
                fetch("https://jsonplaceholder.typicode.com/users")
                    .then((res) => res.json())
                    .then((data) => {
                        setData(data);
                        // console.log(data)
                        setLoading(false);
                    })
                    .catch((err) => console.log("error :", err)
                    )
            }, 900)
        }, [])
        return (
            <HOC data={data} loading={loading} setData={setData} setLoading={setLoading} />
        )
    }

    return (
      
        innerComponent
    )
}

export default WithLoader