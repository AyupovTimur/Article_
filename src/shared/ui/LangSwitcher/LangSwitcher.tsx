import { classNames } from 'shared/lib/classNames';
import cls from './langSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
            <Button
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
            >
                {t('Язык')}
            </Button>
  )
}
