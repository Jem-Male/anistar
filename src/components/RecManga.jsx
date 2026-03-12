import BigContainer from "./BigContainer";
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "./error";
import LoadingPost from "./loadingPost"; // Теперь будет использован

function RecManga() {
    const [recs, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Теперь будет использован
    const [isError, setIserror] = useState(false);

    useEffect(() => {
        async function FetchPost() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://5cd98c2db8b39274.mokky.dev');
                setPost(response.data);
            } catch (error) {
                setIserror(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        FetchPost();
    }, [setIsLoading]);

    // 1. Сначала проверяем на ошибку
    if (isError) return <Error />;

    // 2. Затем проверяем, идет ли загрузка
    if (isLoading) {
        return <LoadingPost />; // Используем компонент здесь
    }

    // 3. Если загрузка завершена, рендерим контент
    return (
        <div className="big_container"> 
            <div className="recommend_manhva"> 
                <span className="big_container_text">Топ-3 манхвы</span>
                <div className="manhva">
                    {recs.map((rec) => (
                        <BigContainer
                            key={rec.id}
                            img={rec.img}
                            name={rec.name}
                            rec={rec}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecManga;
