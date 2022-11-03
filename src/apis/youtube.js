import axios from 'axios';

const KEY = 'AIzaSyCiGXcSAc2OP4VTk9xmHDO342lM56FXuAc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
});
