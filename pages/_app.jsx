import ProgressBar from '@badrap/bar-of-progress';
import 'maplibre-gl/dist/maplibre-gl.css';
import Router from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const progress = new ProgressBar({
        size: 3,
        color: '#FE595E',
        className: 'z-50',
        delay: 100,
    });
    Router.events.on('routeChangeStart', progress.start);
    Router.events.on('routeChangeComplete', progress.finish);
    Router.events.on('routeChangeError', progress.finish);
    return <Component {...pageProps} />;
}

export default MyApp;
