import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';

type MyAppProps = {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
};

function MyApp({ Component, pageProps }: MyAppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
