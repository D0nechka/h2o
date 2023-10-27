import { NavBar } from 'src/shared/components';
import { Router } from './router/Router';
import { useEffect } from 'react';
import { generateRandom } from 'src/shared/utils/generateRandomInfo';
import { useAppDispatch } from './hooks/redux';
import { fillFinances } from 'src/store/slices/finance/financeSlice';
import { fillProblems } from 'src/store/slices/problems/problemsSlice';
import { generateRandomProblems } from 'src/shared/utils/generateRandomProblems';
import './styles/styles.scss';

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fillFinances(generateRandom()));
        dispatch(fillProblems(generateRandomProblems()));
    }, [ dispatch ]);

    return(
        <div className='app'>
            <NavBar />
            <div className='content'>
                <Router />
            </div>
        </div>
    );
};