import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMBD_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjE3MjQyODIyMDUwMzkxMjNiM2NiNzQ1ODMzMjI3NyIsInN1YiI6IjY2MDliNmM2NjBjNTFkMDE2M2U4OWZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eQJ8iJwXiUVJZgorUGmy_SmdEeGoabaoDmo2C2vewQc";

const headers = {
  Authorization: "bearer " + 
  TMBD_TOKEN,
};
export const fetchDataFromApi = async (url, params) => {
  
  try{
    const {data} = await axios.get(BASE_URL + url,
      
      {
      headers,
      params,
    });
    console.log(url);
    console.log(data);
    return data;

  } catch(err){

 
  return err;
  }

}
