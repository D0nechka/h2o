import { NavBar } from 'src/shared/components/widgets';
import { Router } from './router/Router';
import './styles/styles.scss';

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