import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const url =
        "https://api.github.com/users/john-smilga/followers?per_page=100";

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);
        const source = axios.CancelToken.source();
        axios
            .get(url, { cancelToken: source.token })
            .then((res) => {
                setLoading(false);
                res.data.content && setData(res.data.content);
                res.content && setData(res.content);
            })
            .catch((err) => {
                setLoading(false);
                setError("An error occurred. Awkward..");
            });
        return () => {
            source.cancel();
        };
    }, [url]);

    return { data, loading, error };
}
