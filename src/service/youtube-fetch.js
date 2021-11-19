class YoutubeFetch {
    constructor(key) {
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
    }

    async mostPopular() {
        const result = await fetch(
            `https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${this.key}`,
            this.requestOptions
        ).then((response) => response.json());
        return result.items;
    }
}

export default YoutubeFetch;