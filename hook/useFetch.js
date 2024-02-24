import { useState, useEffect } from 'react'

import axios from 'axios'
// import { RAPID_API_KEY } from 'react-native-dotenv';
const rapidApiKey = process.env.EXPO_PUBLIC_RAPID_API_KEY;

const useFetch = (endpoint, query) =>{
    const [ data, setData] = useState([])
    const [isLoading, setIsLoading ] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: {
          ...query
        },
        // params: {
        //   query: 'Python developer in Texas, USA',
        //   page: '1',
        //   num_pages: '1'
        // },
        
      };
      
      const fetchData = async () =>{
        setIsLoading(true);

        try{
            const response = await axios.request(options);
            setData(response.data.data)
            console.log(response.data.data)
            setIsLoading(false)

        }catch (error){
            setError(error);
            console.log(error)
            alert('There is an error ')

        }finally{
            setIsLoading(false)

        }

      }


      useEffect(()=>{
        fetchData()
      },[])

      const refetch = () =>{
        setIsLoading(true);
        fetchData();

      }

    //   try {
    //       const response = await axios.request(options);
    //       console.log(response.data);
    //   } catch (error) {
    //       console.error(error);
    //   }


    return { data, isLoading, error, refetch}
}


export default useFetch;

