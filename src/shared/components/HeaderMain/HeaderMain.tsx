import { Profile } from '../Profile/Profile';
import { Tabs } from '../Tabs/Tabs';
import cls from './style.module.scss';

export const HeaderMain = () => {
    return (
        <div className={cls.headerWrapper}>
            <div className={cls.headerSelector}>
                <Tabs />
            </div>
            <Profile />
        </div>
    );
};