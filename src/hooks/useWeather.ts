import axios from "axios"
import type { SearchType } from "../types"

export default function useWeather() {

    const fetchWeather = async (search: SearchType) => {

        const appId = 'd6afaca78dd634b685cb77688078312c'

        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const {data} = await axios(geoUrl)
            
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    return {
        fetchWeather
    }
}