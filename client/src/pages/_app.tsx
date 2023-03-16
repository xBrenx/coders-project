import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';
import { Auth0Provider } from '@auth0/auth0-react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';


let AUTH_DOMAIN = process.env.AUTH_DOMAIN || "domain de tu vieja"; 
let AUTH_CLIENT_ID = process.env.AUTH_CLIENT_ID || "id de tu vieja";
let AUTH_REDIRECT_URI = process.env.AUTH_REDIRECT_URI;
let AUTH_LOGOUT_REDIRECT_URI = process.env.AUTH_LOGOUT_REDIRECT_URI;

type MyAppProps = {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
};

function MyApp({ Component, pageProps }: MyAppProps): JSX.Element {
  const router =useRouter();
  useEffect(()=>{
    if(router.asPath=== './api/auth/[...auth0].ts'){
      router.replace('/');
    }
  },[router]);
  return (
    <Provider store={store}>
      <Auth0Provider 
    domain={AUTH_DOMAIN}
    clientId={AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: AUTH_REDIRECT_URI
    }}
    onRedirectCallback={(state)=>{
      router.replace(state?.returnTo || '/');
    }}>
      <Component {...pageProps} />
      </Auth0Provider>
    </Provider>
  );
}

export default MyApp;
