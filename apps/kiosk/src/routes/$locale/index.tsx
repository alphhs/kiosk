import { usePageQuery } from '@/gql/page/page.generated';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/')({
  component: HomePage,
})
function HomePage() {
  const { locale } = Route.useParams()
  const { data } = usePageQuery({ variables: { slug: `/${locale}/` } });
  console.log(data);

  return (
   <div>fewafejka</div>
  )
}
