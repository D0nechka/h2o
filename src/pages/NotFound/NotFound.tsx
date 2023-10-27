import { useNavigate } from 'react-router';
import cls from './style.module.scss';

export const NotFound = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <div className={cls.notFoundContainer}>
            <h1 className={cls.title}>404 - Страница не найдена</h1>
            <p className={cls.description}>К сожалению, мы не можем найти страницу, которую вы ищете.</p>
            <div className={cls.buttons}>
                <button onClick={goHome} className={cls.button}>На главную</button>
                <button onClick={refreshPage} className={cls.button}>Обновить страницу</button>
            </div>
        </div>
    );
};