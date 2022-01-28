import { useEffect, useState } from 'react';

export default function useRequest(request) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    setLoading(true)
    request()
      .then(json => {
        console.log(json);
        setData(json)
      })
      .catch(e => setError(e))
      .finally(() => setLoading(false))
  }, [])

  return [data, isLoading, error];
}
