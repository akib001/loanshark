import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout'
import HomePage from "./pages/HomePage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="analytics" element={<AnalyticsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
