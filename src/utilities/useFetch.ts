import { useEffect, useState } from "react"


const useFetch = (endPoint: string) => {
    const [loading, setLoading ] = useState(true);
    const [userData, setUserData] = useState<null | {data: any}>(null);

    useEffect(()=>{
fetch(endPoint).then(resp => resp.json()).then(data => {
    console.log(data)
    setUserData(data)
    setLoading(false)
}).catch(err => console.error(err))
    },[])


    return {loading, userData, setUserData}
}

export default useFetch