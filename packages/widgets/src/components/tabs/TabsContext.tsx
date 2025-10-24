import * as React from 'react';
import { createContext } from 'react';

import type { TabsProps } from './Tabs';

interface TabsContextValue extends TabsProps {
  baseId: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function TabsProvider(props: TabsContextValue & { children: React.ReactNode }) {
  const { children, ...context } = props;

  // Only re-memoize when prop values change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = React.useMemo(() => context, Object.values(context)) as TabsContextValue;

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
}

TabsProvider.displayName = 'TabsProvider';

function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (context) return context;
  throw new Error("Component must be used within 'TabsProvider'");
}

export { TabsContext, TabsProvider, useTabsContext };
