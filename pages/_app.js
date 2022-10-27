import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';
import Layout from "../components/Layout";

const progress = new ProgressBar({
    size: 4, color: '#FE595E', className: 'z-50', delay: 100,
});

// Router.events.on whenever there is a change on router it dispatches a action
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);


function MyApp({Component, pageProps}) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}

export default MyApp
