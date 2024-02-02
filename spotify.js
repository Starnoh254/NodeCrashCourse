// Consuming Spotify's  Web API

// Get the access Token 
const { SPOTIFY_CLIENT_ID , SPOTIFY_CLIENT_SECRET } = require('./config')

function  getToken() {

    return new Promise (async (resolve , reject) => {
        const url = "https://accounts.spotify.com/api/token"

        const request = new Request(url , {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`
        })


        try {
            const response = await fetch(request)
            const data = await response.json()
            console.log("data", data.access_token);

            resolve(data.access_token)
        } catch (error){
            reject('Error getting token')
            console.error(error)
        }
            })



}



// function definition to get artist's info 

const  getArtistInfo =  ( token, id ) => {
    return new Promise (async (resolve , reject) => {
        const url = `https://api.spotify.com/v1/artists/${id}`
        console.log(`here is the id ${id}`)
        const request = new Request(url , {
            method:  'GET',
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
    
        try{
            const response = await fetch(request)
            const data = await  response.json()
            resolve(data)
        }catch(err){
            reject ('Could not retrieve Artist Information')
            console.error(err)
        }
    })

   

}


const  artist_id = '3TVXtAsR1Inumwj472S9r4'
getToken()
    .then((token)=>{
        return getArtistInfo(token, artist_id)
   .then((data)=>console.log(data))})
   .catch((e)=>console.log(e))

    