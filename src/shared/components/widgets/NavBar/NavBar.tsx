import { Box, Chart, Coins, List, Logo, People, Scheduler, Settings } from '../../icons';
import cls from './style.module.scss';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    const iconsArr = [
        Scheduler,
        List,
        Box,
        People,
        Coins,
        Chart,
        Settings
    ];

    return (
        <div className={cls.navBar}>
            <div className={cls.logoWrapper}>
                <Logo/>
            </div>
            <div className={cls.navBtnWrapper}>
                {iconsArr.map((Icon, i) => {
                    return (
                        <NavLink
                            key={i}
                            to={Icon === Chart ? '/' : '*'}
                            className={cls.navBtn}
                        >
                            <Icon/>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};