import { usePageQuery } from '@/gql/page/page.generated';
import { WidgetsRender } from '@kiosk/widgets';
import BackgroundRender from '@kiosk/widgets/background-render';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/')({
  component: HomePage,
});
function HomePage() {
  const { locale } = Route.useParams();
  const { data } = usePageQuery({ variables: { slug: `/${locale}/` } });

  return (
    <BackgroundRender as="main" background={data?.page?.background}>
      <WidgetsRender items={data?.page?.items || []} />
    </BackgroundRender>
  );
}
