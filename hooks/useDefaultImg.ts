import DefaultImgIcon from 'public/images/defaultPhoto.svg';

interface HookReturnType {
  imageOnLoadHandler: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  imageOnErrorHandler: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const useDefaultImg = (): HookReturnType => {
  const imageOnLoadHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    if (!event.currentTarget.classList.contains('error')) {
      event.currentTarget.classList.add('success');
    }
  };

  const imageOnErrorHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = DefaultImgIcon;
    event.currentTarget.classList.remove('success');
    event.currentTarget.classList.add('error');
  };

  return {
    imageOnLoadHandler,
    imageOnErrorHandler,
  };
};
