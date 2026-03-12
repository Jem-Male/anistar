import RecManga from "../RecManga";
import PostList from "../PostList";
import CommentInfo from "../CommentInfo";
function HomePage(){
    return(<>        <PostList/>
        <RecManga/>
        <CommentInfo/></>

    );
}

export default HomePage;