import React, { useEffect, useState } from "react"
import "./homepage.css";
import logo from "./images/logo.png";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import TableList from "./components/Table";
import Welcome from "./components/Welcome";
import YourPlaylist from "./components/Playlist/YourPlaylist";
import PopularPlaylist from "./components/Playlist/PopularPlaylist";
import Player from "./components/Player";
import PostList from "./components/Posts/PostList";
import PostForm from "./components/Posts/PostForm";
import * as PostService from "./api/PostService";
import { getUser } from "./api/UserService";
import 'bootstrap/dist/css/bootstrap.min.css';






const App = () => {
  // const [posts, setPosts] = useState([]);
  // const [user] = useState(getUser);

  // async function fetchPosts() {
  //       let res = await PostService.getAll();
  //       console.log("POST SERVICE RESPONSE: ", res.data);
  //       if (res.status === 200) {
  //           setPosts(res.data.data.reverse());
  //       }
  //   }

  //   useEffect(() => {
  //       console.log("USER: ", user);
  //       fetchPosts();
  //   }, []); //eslint-disable-line
  return (
    
    <div className="homepage-ctr">
        <NavBar />
      <div className="home-ctr">
        <div className="right-ctr">
          <Welcome />
          <Search />
          <TableList />
        </div>

        <div className="left-ctr">
          <PopularPlaylist />
          <YourPlaylist />
        </div>
      </div>
      <div className="post-ctr">
      {/* <PostForm user={user} getPostsAgain={() => fetchPosts()} />
                {posts.map((post) => {
                    // console.log("WHICH DATA AM I USING: ", post);
                    return (
                        <PostList
                            user={user}
                            author={post.author}
                            body={post.body}
                            title={post.title}
                            postComments={post.comments}
                            key={post._id}
                            id={post._id}
                            getPostsAgain={() => fetchPosts()}
                        />
                    );
                })} */}

      </div>
      <div className="player-ctr">
        <Player />
      </div>
    </div>
   
    
  );
};

export default App;