import { Link } from "react-router-dom";

function Error(){
    return(
        <div class="error">
            <div class="container">
                <h3 class="error-title">произошла ошибка</h3>
                <p class="error-description">проверте подключение к интернету, возможно сервер отключен</p>
                <Link to="/" class="white-btn">обновить</Link>
            </div>
        </div>
    );
}

export default Error;