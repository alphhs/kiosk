import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PageDocument, PageQuery, PageQueryVariables } from 'b2c/src/gql/page/page.generated';

import { SingleProduct } from './components/single-product';
import { configure } from './registry';
import { ApolloWrapper } from './test/apollo';
import { getClient } from './test/apollo-client';
import { WidgetsRender } from './widgets-render';

const meta: Meta<typeof WidgetsRender> = {
  component: WidgetsRender,
  argTypes: { slug: { control: { type: 'text' } } },
};

export default meta;

type Story = StoryObj<typeof WidgetsRender>;

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <ApolloWrapper>
      <Suspense>
        <DynamicPage {...props} />
      </Suspense>
    </ApolloWrapper>
  ),
  name: 'DynamicPage',
  args: { slug: '/ru/test' },
};

configure({
  apolloClient: getClient,
  product: SingleProduct,
});

async function DynamicPage({ slug }: { slug: string }) {
  const { data } = await getClient().query<PageQuery, PageQueryVariables>({
    query: PageDocument,
    variables: { slug },
  });

  return <WidgetsRender items={data?.page?.items || []} withInspector />;
}
