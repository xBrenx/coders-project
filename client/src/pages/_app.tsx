import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';
import { Auth0Provider } from '@auth0/auth0-react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
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
    <Auth0Provider 
    domain:string={process.env.AUTH0_DOMAIN}
    clientId:string={process.env.AUTH0_CLIENT_ID}
    redirectUri={process.env.AUTH0_REDIRECT_URI}
    onRedirectCallback={(state)=>{
      router.replace(state?.returnTo || '/');
    }}>
      <Component {...pageProps} />
      </Auth0Provider>
  );
}

export default MyApp;
