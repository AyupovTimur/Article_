import { classNames } from 'shared/lib/classNames';
import cls from './sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button style={{display: 'block', margin: '0 auto'}} theme={ButtonTheme.CLEAR} onClick={onToggle}>Открыть</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher/>
            </div>
        </div>
    );
};