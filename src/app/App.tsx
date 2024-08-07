import {Suspense, useEffect, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';



const App = () => {

    // const [isOpen, setIsOpen] = useState(false)

//    const { theme } = useTheme();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
               
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
                
            </Suspense>
            
        </div>
    );
};

export default App;
