import React, { useEffect, useState } from "react";
import PostList from "../../components/Posts/PostList";
// import PostForm from "../../PostForm";
// import * as PostService from "../../../api/PostService";
// import { getUser } from "../../../api/UserService";

const ProfilePage = () => {
        return (
          <div className="">
            <h2>Profile</h2>
            <PostList />
      
          </div>
        );
      };
      
      export default ProfilePage;
//     const [posts, setPosts] = useState([]);
//     const [user] = useState(getUser);

//     async function fetchPosts() {
//         let res = await PostService.getAll();
//         console.log("POST SERVICE RESPONSE: ", res.data);
//         if (res.status === 200) {
//             setPosts(res.data.data.reverse());
//         }
//     }

//     useEffect(() => {
//         console.log("USER: ", user);
//         fetchPosts();
//     }, []); 

//     return (
//         <div>
//             <div>
//                 <PostForm user={user} getPostsAgain={() => fetchPosts()} />
//                 {posts.map((post) => {
//                     // console.log("WHICH DATA AM I USING: ", post);
//                     return (
//                         <Post
//                             user={user}
//                             author={post.author}
//                             body={post.body}
//                             title={post.title}
//                             postComments={post.comments}
//                             key={post._id}
//                             id={post._id}
//                             getPostsAgain={() => fetchPosts()}
//                         />
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };


