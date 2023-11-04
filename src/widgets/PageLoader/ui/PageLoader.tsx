import { classNames } from 'shared/lib/classNames/classNames';
import cls from './pageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps): JSX.Element => {
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};