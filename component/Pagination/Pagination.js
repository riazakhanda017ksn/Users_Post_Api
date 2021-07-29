const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  console.log("pagination dj", postPerPage, totalPosts, paginate);
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="pagination">
      {pageNumber.map((number) => (
        <li>
          <a onClick={() => paginate(number)} href="!#">
            {number}
          </a>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
