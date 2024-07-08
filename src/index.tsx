import {render} from "react-dom";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";

import 'app/styles/index.scss';

import "./shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoriesProvider } from "app/providers/StoriesProvider";

render(
        <BrowserRouter>
            <StoriesProvider>
                    <ErrorBoundary>
                        <ThemeProvider>
                            <App />
                        </ThemeProvider>
                    </ErrorBoundary>
            </StoriesProvider>
        </BrowserRouter>,
    document.getElementById('root')
)
