import { classNames } from 'shared/lib/classNames/classNames';
import cls from './pageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface PageErrorProps {
  className?: string
}

const reloadPage = (): void => {
  location.reload()
}

export const PageError = ({ className }: PageErrorProps): JSX.Element => {
  const { t } = useTranslation('errorPage');
  return (
    <div className={classNames(cls.erorPage, {}, [className])}>
      <p>{t('Произошла непредвиденая ошибка')}</p>
      <Button onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  )
}