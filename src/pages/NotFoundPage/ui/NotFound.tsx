import { useTranslation } from 'react-i18next'

const NotFound = (): JSX.Element => {
  const { t } = useTranslation('notFound')

  return (
    <div>
      <h1>{t('Страница не найдена')}</h1>
    </div>
  )
}

export default NotFound