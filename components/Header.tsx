import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Header</span>
      </h1>
      <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
      <style jsx>
        {`
          .title {
            color: ${headerStyles.titleColor};
          }
        `}
      </style>
    </div>
  );
};

export default Header;
