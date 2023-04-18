import styles from './Sidebar.scss';
import classNames from 'classnames';
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper-sidebar')}>
      <h2>Sidebar</h2>
    </aside>
  );
}

export default Sidebar;
