import MD5 from "crypto-js/md5";

const getHash = (ts: string, privateKey?: string, publicKey?: string) => {
    return MD5(ts + privateKey + publicKey).toString();
};

const fetchData = async <T>(apiRoute: string): Promise<T> => {

    const baseUrl = `${process.env.REACT_APP_API_URL}${apiRoute}`
    const ts = Date.now().toString()
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const hash = getHash(ts, privateKey, publicKey);
    const url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`

    try {
        let response = await fetch (url);
        const data = await response.json()
        return data;
    } catch ( err: any ) {
        return err;
    }

}

export { fetchData };