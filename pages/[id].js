import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  const paths = data.map((userPost) => {
    return {
      params: { id: userPost.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/` + id);
  const data = await res.json();
  console.log("data", data);
  return {
    props: { userPost: data },
  };
};
const Details = ({ userPost }) => {
  return (
    <div className="need-customize ">
      <h1>User number id {userPost.id} details here</h1>

      <div className="details-box">
        <h2>User Id : {userPost.id}</h2>
        <h3>User Post Title : {userPost.title}</h3>
        <span>
          {" "}
          <strong>User Post Details</strong> : {userPost.body}
        </span>
      </div>
      <div className="go-back-your-home">
        <Link href="/">
          <a> Back To Your Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Details;
