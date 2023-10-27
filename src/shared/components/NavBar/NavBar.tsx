import { iconsArr } from 'src/shared/mocks/arrays';
import { NavLink } from 'react-router-dom';
import { Logo } from '../icons';
import cls from './style.module.scss';
import classNames from 'classnames';

export const NavBar = () => {
    return (
        <div className={cls.navBar}>
            <div className={cls.logoWrapper}>
                <Logo />
            </div>
            <div className={cls.navBtnWrapper}>
                {iconsArr.map(({ icon: Icon, to, }, index) => {
                    return (
                        <NavLink
                            key={`${to}__${index}`}
                            to={to}
                            className={({ isActive, }) => classNames(cls.navBtn, { [cls.activeLink]: isActive, })}
                        >
                            <Icon/>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};