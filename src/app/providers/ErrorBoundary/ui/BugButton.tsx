import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// Компоненты для тестирования ErrorBoundary
export const BugButton = (): JSX.Element => {

  const [error, setError] = useState(false)
  const { t } = useTranslation('errorPage')
  const onThrow = (): void => {
    setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button onClick={onThrow}>{t('Выбросить ошибку')}</Button>
  )
}