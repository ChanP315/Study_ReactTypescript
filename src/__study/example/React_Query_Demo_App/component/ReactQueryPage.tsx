import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'

const ReactQueryPage = () => {
    const fetchPost = () => {
        return axios.get('http://localhost:4000/posts');
    }
    const {isLoading, data, isError, error} = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPost,
        retry:1,
        select:(data)=> {
            return data.data;
        }
    });

    console.log("conslog.log", isLoading, data);
    console.log("error", isError, error);

    if(isLoading)
    {
        return (<h1>Loading...</h1>)
    }
    if(isError)
    {
        return (<h1>{error.message}</h1>)
    }
    return (
        <div>
        {
            data.map((item:{id:number, title:string}, index:number)=> (
                <div key={index}>{item.title}</div>
            ))
        }
        </div>
    )
}

export default ReactQueryPage