import { useMemo, useEffect, useState } from "react";
import api from "./api";

export default function useData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        api.get('/event/1').then((response) => {
            setData(response.data);
        });
    }, []);

    return useMemo(() => ({ data }), [data]);
}
