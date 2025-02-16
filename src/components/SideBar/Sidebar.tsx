import style from "./Sidebar.module.scss";

const SideBar = () => {
  return (
    <>
      <div className={style.iconPlaceholder}>Icon Placeholder</div>
      <div className={style.sidebar}>
        <div className={style.sidebarItem}>
          <h2>Calendar</h2>
        </div>
        <div className={style.sidebarItem}>
          <h2>Employees</h2>
        </div>
      </div>
    </>
  );
};

export default SideBar;
