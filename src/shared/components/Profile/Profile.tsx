import { useAppSelector } from 'src/app/hooks/redux';
import { Triangle } from '../icons/Triangle';
import { selectUser } from 'src/store/slices/user/userSlice';
import cls from './style.module.scss';

export const Profile = () => {
    const { name, profession, avatar, } = useAppSelector(selectUser);

    return (
        <div className={cls.headerProfile}>
            <img src={avatar}></img>
            <div className={cls.profInfo}>
                <span className={cls.name}>{name}</span>
                <span className={cls.profession}>{profession}</span>
            </div>
            <button className={cls.select}>
                <Triangle />
            </button>
        </div>
    );
};