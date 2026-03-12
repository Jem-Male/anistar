import { Link } from "react-router-dom";

function Post_card({ post }) {
    return (
        <Link to={`/Info/${post.id}`} class="category-item">
            <img src={post.img} alt="img" class="category-item__imag" />
            <div class="name_text">
                <span class="category-item__titel">{post.name}</span>
            </div>
        </Link>
    );
}

export default Post_card;