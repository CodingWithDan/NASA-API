class MakeNetflixShows{
    constructor(title, genre, rating, numOfEp){
        this.title = title
        this.grenre = genre
        this.budget = rating
        this.numOfEp = numOfEp
    }

    saveToList(){
        alert("Saved to List")
    }
    
    play(){
        console.log('Playing...')
    }

    stop(){
        console.log('Stopped.')
    }

}

let bridgerton = new MakeNetflixShows ('Bridgerton', 'Period Romantic Genre', '99%', 10)


const API_KEY = (() => {
    const localAPIKey = localStorage.getItem('apod-api');
    if (localAPIKey) return localAPIKey;

    const key = prompt('Enter NASA API Key for full un-rate-limited access', 'DEMO_KEY') || 'DEMO_KEY'
    if(key !== 'DEMO_KEY' && confirm)
}
)