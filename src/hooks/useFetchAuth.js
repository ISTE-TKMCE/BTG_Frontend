import { useState, useEffect, useContext } from 'react';
import { ModalContext } from '../context/modal';
import { UserContext } from '../context/user';

const useFetchAuth = (url , token) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  // const {tokenState} = useContext(UserContext);
  // const [token,setToken] = toke

  const {showState} = useContext(ModalContext);
  const [show,setShow] = showState;

  useEffect(() => {
    setShow(true);
    const abortCont = new AbortController();

    
      fetch(url, { 
        signal: abortCont.signal ,
        method:"GET",
        headers:{
          "Authorization": `token ${token}`
        }
      })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        // setIsPending(false);
        setShow(false);
        setData(data);
        // console.log(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          // console.log('--')
        } else {
          // auto catches network / connection error
          // setIsPending(false);
          setShow(false)
          setError(err.message);
        }
      })

    // abort the fetch
    return () => abortCont.abort();
  }, [url,token])

  return { data, isPending, error };
}
 
export default useFetchAuth;