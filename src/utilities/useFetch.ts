import { useEffect, useState } from "react"


const useFetch = (endPoint: string) => {
    const [loading, setLoading ] = useState(true);
    const [userData, setUserData] = useState();

    useEffect(()=>{
fetch(endPoint).then(resp => resp.json()).then(data => console.log(data))
    },[])


    return {loading, userData, setUserData}
}

export default useFetch