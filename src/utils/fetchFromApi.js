import axios from "axios"

const baseUrl = "https://youtube-v31.p.rapidapi.com"

const options = {
    url: baseUrl,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': "d6a99acd19msh84be30dfdfbfa55p1c4ad8jsn18e7efda99a4",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi = async (url)=>{
    const { data } = await axios.get(`${baseUrl}/${url}`, options);
    return data
  }