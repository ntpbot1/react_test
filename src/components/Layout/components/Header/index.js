import classNames from 'classnames';
import styles from './Header.scss';
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper-header')}>
      <div className={cx('inner')}></div>
    </header>
  );
}

export default Header;
