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

    async videoComment(videoId) {
        const result = await fetch(
            `https://www.googleapis.com/youtube/v3/commentThreads/?part=snippet&videoId=${videoId}&maxResults=25&order=relevance&key=${this.key}`,
            this.requestOptions
        ).then((response) => response.json());
        return result.items;
    }

    async search(word) {
        const result = await fetch(
            `https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=25&q=${word}&type=video&key=${this.key}`,
            this.requestOptions
        ).then((response) => response.json());
        return result.items.map((item) => ({
            ...item,
            id: item.id.videoId,
        }));
    }
}

export default YoutubeFetch;
