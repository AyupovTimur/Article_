import { classNames } from 'shared/lib/classNames/classNames';
import cls from './navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.navbar, {}, [className])}>

      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={'/'}>{t("Главная")}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t("Следующая")}</AppLink>
      </div>

    </div>
  )
}
