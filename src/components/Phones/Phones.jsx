import axios from "axios";
import { useEffect, useState } from "react";

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(res => res.json())
        // .then(data => setPhones(data.data));

        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(data => setPhones(data.data))
    }, [])
    return (
        <div>
            <div className="h2 text-5xl">Phones: {phones.length}</div>
        </div>
    );
};

export default Phones;