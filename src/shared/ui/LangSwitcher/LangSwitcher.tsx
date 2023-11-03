import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '../Button/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  )
}
