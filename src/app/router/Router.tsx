import { Route, Routes } from 'react-router-dom';
import { Main, NotFound } from 'src/pages';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};