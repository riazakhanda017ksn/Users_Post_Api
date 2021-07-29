import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log("data", data);
  return {
    props: { userPosts: data },
  };
};

const Post = ({ userPosts }) => {
  return (
    <div className="main-div">
      {userPosts.map((userPost) => (
        <Link href={"/" + userPost.userId} key={userPost.userId}>
          <div className="postBoxStyle">
            <h4>UserId - {userPost.id}</h4>
            <span> {userPost.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Post;
