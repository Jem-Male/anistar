import RecManga from "../RecManga";
import PostList from "../post_list";
import CommentInfo from "../CommentInfo";
function HomePage(){
    return(<>        <PostList/>
        <RecManga/>
        <CommentInfo/></>

    );
}

export default HomePage;