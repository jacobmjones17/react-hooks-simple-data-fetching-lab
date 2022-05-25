import { useEffect, useState } from "react";

function App() {
    const [theImage, setTheImage] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setTheImage(data.message);
                setIsLoaded(true);
            })
    }, []);

    if (!isLoaded) return <p>Loading...</p>;

    return (
    <div>
        <img src={theImage}alt="A Random Dog"/>
    </div>
    )

}

export default App