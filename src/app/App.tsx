import { NavBar } from 'src/shared/components/widgets';
import './styles/styles.scss';
import { Router } from './router/Router';

export const App = () => {
    return(
        <div className='app'>
            <NavBar />
            <div className='content'>
                <Router />
            </div>
        </div>
    );
};