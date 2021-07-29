const Footer = () => {
  const date = new Date();
  const mainDate = date.getFullYear();
  return (
    <div className="footer">
      <p>All right reserved By Riaz {mainDate}</p>
    </div>
  );
};

export default Footer;
