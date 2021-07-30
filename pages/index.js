import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Pagination from "../component/Pagination/Pagination";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log("data", data);
  return {
    props: { userPosts: data },
  };
};

///work-here-for-pagination

export default function Home({ userPosts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

  ///
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = userPosts.slice(indexOfFirstPost, indexOfLastPost);

  //post per page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //name
  const name = userPosts;

  return (
    <>
      <Head>
        <title>Home | User Post</title>
        <meta name="keywords" content="restAPI" />
      </Head>

      <div className="home">
        <h1>Post Details</h1>
        <p>
          We are happy to welcome you to the user post details website. Here you
          can view any user details and also see a detailed list of who posted
          what
        </p>
        <br />
        <div className="main-div">
          {currentPost.map((userPost) => (
            <Link href={`/` + userPost.id} key={userPost.id}>
              <div className="postBoxStyle">
                <h4>UserId - {userPost.id}</h4>
                <span> {userPost.title}</span>
              </div>
            </Link>
          ))}
        </div>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={name.length}
          paginate={paginate}
        ></Pagination>
      </div>
    </>
  );
}
