import { classNames } from 'shared/lib/classNames';
import cls from './navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>

      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={'/'}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>Вторая</AppLink>
      </div>

    </div>
  )
}
