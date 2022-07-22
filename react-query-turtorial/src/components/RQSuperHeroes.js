import React from "react"
import { useQuery } from 'react-query'
// import { Button } from "@material-ui/core"
import axios from 'axios'
import {Link} from 'react-router-dom'

const fetchSuperHeroes=() =>{
    return axios.get('https://fakestoreapi.com/products')
}

export const RQSuperHeroes =() => {
    const onSuccess = (data) => {
        console.log ("perfome side after data fetching...", data)

    }
    const onError = (error) => {
        console.log('performe site effect after encouring error...', error)
    }
    
    
    const {isLoading, data, isError, error, isFetching, refetch}= useQuery(['superheroes'], fetchSuperHeroes,
    { 
        onSuccess,
        onError,
        // select: (data) => {
        //     const superHeroNames = data.data.map((hero) => hero.title);
        //     return superHeroNames
        // }
    } 
    )
    

    console.log({isLoading, isFetching})


    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>RQ SuperHeroes page</h2>
            <button onClick={refetch}>Call Api</button>
            {data?.data.map((hero) =>{
                return <div key={hero.id}>
                    <Link to={`/rq-superheroes/${hero.id}`}>{hero.title}</Link>
                    </div>
            })}
            {/* {
                data.map(heroName =>{
                    return <div key={heroName}>{heroName}</div>
                })
            } */}

        </>
    )
}