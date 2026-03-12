import Comment from "./Comment";


function CommentInfo(){

    const comments=[
        {
            id:1,
            user_img:"https://static.vecteezy.com/system/resources/previews/027/617/802/non_2x/user-glyph-icon-for-personal-and-commercial-use-free-vector.jpg",
            user_name:"user2464",
            user_date:"12.03.2023",
            comment_text:"Набираем команду по переводу! Люди отзовитесь!"
        },
        {
            id:1,
            user_img:"https://static.vecteezy.com/system/resources/previews/027/617/802/non_2x/user-glyph-icon-for-personal-and-commercial-use-free-vector.jpg",
            user_name:"user2464",
            user_date:"12.03.2023",
            comment_text:"Набираем команду по переводу! Люди отзовитесь!"
        },
        {
            id:1,
            user_img:"https://static.vecteezy.com/system/resources/previews/027/617/802/non_2x/user-glyph-icon-for-personal-and-commercial-use-free-vector.jpg",
            user_name:"user2464",
            user_date:"12.03.2023",
            comment_text:"Набираем команду по переводу! Люди отзовитесь!"
        },
        {
            id:1,
            user_img:"https://static.vecteezy.com/system/resources/previews/027/617/802/non_2x/user-glyph-icon-for-personal-and-commercial-use-free-vector.jpg",
            user_name:"user2464",
            user_date:"12.03.2023",
            comment_text:"Набираем команду по переводу! Люди отзовитесь!"
        }
    ]

    return(
        <div class="down">
        <div class="coment">
            <h3 class="forum">Форум</h3>
            <div class="comen_text">
                <div class="comment_card">
                    <div class="container_d">                           
                    {comments.map((comment, index)=>(
            <Comment
                key={index}
                user_img={comment.user_img}
                user_date={comment.user_date}
                user_name={comment.user_name}
                comment_text={comment.comment_text}
            />
        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CommentInfo;