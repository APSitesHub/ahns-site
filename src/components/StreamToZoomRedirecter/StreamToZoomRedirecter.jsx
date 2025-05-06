import { useLocation } from 'react-router-dom';
import {
  LinkText,
  PlatformLink,
  StreamPlaceHolder,
  StreamPlaceHolderText,
} from './StreamToZoomRedirecter.styled';

const StreamToZoomRedirecter = () => {
  const location = useLocation();

  let page;
  switch (location.pathname.replace('/lesson/', '')) {
    case 'logistics':
      page =
        'https://us04web.zoom.us/j/72514837988?pwd=ijQbKbf38FsKpXmOU1b8bmlxxWdIaZ.1';
      break;
    case 'logistics_2':
      page =
        'https://us04web.zoom.us/j/72514837988?pwd=ijQbKbf38FsKpXmOU1b8bmlxxWdIaZ.1';
      break;
    default:
      break;
  }

  const redirect = () => {
    setTimeout(() => {
      window.location.replace(page);
    }, 10000);
  };

  page && redirect();

  document.title = 'Redirecting... | AP Education';

  return (
    <>
      <StreamPlaceHolder>
        <StreamPlaceHolderText>
          Hello! <br />
          Today's lesson will be held in Zoom! <br /> Please wait while we
          redirect you to the Zoom page.
        </StreamPlaceHolderText>
        <PlatformLink href={page} target="_blank" rel="noopener noreferrer">
          <LinkText>You also can try to join using this link</LinkText>
        </PlatformLink>
      </StreamPlaceHolder>
    </>
  );
};

export default StreamToZoomRedirecter;
