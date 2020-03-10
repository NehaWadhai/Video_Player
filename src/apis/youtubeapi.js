import axios from 'axios'

const KEY = 'AIzaSyAd-WBr3Q28dP_Y-0VxM7Hn6fm-omYqFCI'

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params : {
            part : 'snippet',
            maxResults : 5,
            // type : video,
            key : KEY

        }
    }
);

