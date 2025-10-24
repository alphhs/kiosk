import { usePageQuery } from '@/gql/page/page.generated';
import { WidgetsRender } from '@kiosk/widgets';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/')({
  component: HomePage,
})
function HomePage() {
  const { locale } = Route.useParams()
  const { data } = usePageQuery({ variables: { slug: `/${locale}/` } });
  console.log(data);

  return (
    <WidgetsRender items={data?.page?.items || []} />
  )
}
