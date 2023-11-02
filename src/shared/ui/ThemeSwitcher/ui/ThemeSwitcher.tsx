import { classNames } from 'shared/lib/classNames';
import cls from './themeSwitcher.module.scss';
import { useThem } from 'app/providers/ThemeProvider';
import ToggleThemeIcon from 'shared/assets/icons/theme_light_dark_icon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps): JSX.Element => {
  const { toggleTheme } = useThem()
  return (
        <div className={classNames(cls.themeSwitcher, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
                <ToggleThemeIcon/>
            </Button>
        </div>
  )
}
