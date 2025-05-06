import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { WindowedChat } from 'utils/Chat/ChatWindowed/WindowedChat';
import { Loader } from './SharedLayout/Loaders/Loader';
// import StreamToZoomRedirecter from './StreamToZoomRedirecter/StreamToZoomRedirecter';

const Streams = lazy(() =>
  import(/* webpackChunkName: "Streams page" */ '../pages/Streams/Streams')
);

//eslint-disable-next-line
const Stream = lazy(() =>
  import(/* webpackChunkName: "Stream page" */ '../pages/Streams/Stream/Stream')
);

const MySSW = lazy(() =>
  import(/* webpackChunkName: "My SSW Page" */ '../pages/MySSW/MySSW')
);

const UniUserAdminPanel = lazy(() =>
  import(
    /* webpackChunkName: "Polish University Users Admin Panel page" */ '../pages/Streams/UserAdminPanel/UniUserAdminPanel'
  )
);

const NotFound = lazy(() =>
  import(/* webpackChunkName: "Not Found" */ '../pages/NotFound/NotFound')
);

export const App = () => {
  return (
    <>
      <Toaster
        containerStyle={{
          top: '10%',
        }}
      />
      <Suspense fallback={Loader} noindex={true}>
        <Routes noindex={true}>
          <Route index path="/" element={<MySSW />} noindex={true}></Route>
          <Route
            path="admin"
            element={<UniUserAdminPanel uni={'SSW'} lang={'pl'} />}
            noindex={true}
          />
          <Route path="*" element={<NotFound />} noindex={true} />

          <Route path="lesson" element={<Streams />} noindex={true}>
            {/* <Route
              path="online"
              element={<StreamToZoomRedirecter />}
              noindex={true}
            /> */}
            <Route path="online" element={<Stream />} noindex={true} />
            <Route
              path="online-chat"
              element={<WindowedChat />}
              noindex={true}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
