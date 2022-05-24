import { useState, useEffect, useContext } from 'react';

const useFetchAuth = (url , token) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  // const {tokenState} = useContext(UserContext);


  useEffect(() => {
    setIsPending(true)
    const abortCont = new AbortController();

    
      fetch(url, { 
        signal: abortCont.signal ,
        method:"GET",
        headers:{
          "Authorization": `token ${token}`
        }
      })
      .then(res => {
        console.log("<<<<<<<<<<<<<<<<<<" , res)
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        // console.log(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          // console.log('--')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      })

    // abort the fetch
    return () => abortCont.abort();
  }, [url,token])

  return { data, isPending, error };
}
 
export default useFetchAuth;