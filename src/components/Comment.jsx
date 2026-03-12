function Comment(props){
    return( 
        <a class="comment_card" href="/comm">        
            <img src={props.user_img} alt="user" class="user" />
            <span class="user_name">{props.user_name}</span> <br></br>
            <span class="user_date">{props.user_date}</span>
            <br></br>
            <span class="comment_text">{props.comment_text}</span>
        </a>
    );
}

export default Comment;