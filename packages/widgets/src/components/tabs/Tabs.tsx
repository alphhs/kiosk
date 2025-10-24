import * as React from 'react';
import { useControllableState } from '@cody-mn/utils/hooks/use-controllable-state';

import { TabsProvider, useTabsContext } from './TabsContext';

/**
 * USAGE:
 * <Tabs>
 *  <TabsList>
 *      <TabsTrigger value='a' />
 *  </TabsList>
 *  <TabsContent value='a' />
 * </Tabs>
 **/

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The value for the selected tab, if controlled */
  value?: string;
  /** The value of the tab to select by default, if uncontrolled */
  defaultValue?: string;
  /** A function called when a new tab is selected */
  onValueChange?: (val: string) => void;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(({ value: valueProp, defaultValue, onValueChange, ...props }, ref) => {
  const [value, setValue] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
    defaultProp: defaultValue,
  });

  return (
    <TabsProvider baseId={React.useId()} value={value} onValueChange={setValue}>
      <div {...props} ref={ref} />
    </TabsProvider>
  );
});

Tabs.displayName = 'Tabs';

/* ---------------------------------------------------------------------------------------------- */
export type TabsListProps = React.HTMLAttributes<HTMLDivElement>;
const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>((props, ref) => (
  <nav aria-label="Tabs" role="tablist" {...props} ref={ref} />
));

TabsList.displayName = 'TabsList';

/* ---------------------------------------------------------------------------------------------- */
export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(({ value, disabled = false, ...props }, ref) => {
  const context = useTabsContext();
  const triggerId = makeTriggerId(context.baseId, value);
  const contentId = makeContentId(context.baseId, value);
  const isSelected = value === context.value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      aria-controls={contentId}
      data-state={isSelected ? 'active' : 'inactive'}
      data-disabled={disabled ? '' : undefined}
      disabled={disabled}
      id={triggerId}
      {...props}
      ref={ref}
      onMouseDown={composeEventHandlers(props.onMouseDown, (event) => {
        // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
        // but not when the control key is pressed (avoiding MacOS right click)
        if (!disabled && event.button === 0 && event.ctrlKey === false) {
          context.onValueChange(value);
        } else {
          // prevent focus to avoid accidental activation
          event.preventDefault();
        }
      })}
      onKeyDown={composeEventHandlers(props.onKeyDown, (event) => {
        if ([' ', 'Enter'].includes(event.key)) context.onValueChange(value);
      })}
      onFocus={composeEventHandlers(props.onFocus, () => {
        // activate tab following focus
        if (!isSelected && !disabled) {
          context.onValueChange(value);
        }
      })}
    />
  );
});

TabsTrigger.displayName = 'TabsTrigger';

/* ---------------------------------------------------------------------------------------------- */
export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(({ value, ...props }, ref) => {
  const context = useTabsContext();
  const triggerId = makeTriggerId(context.baseId, value);
  const contentId = makeContentId(context.baseId, value);
  const isSelected = value === context.value;

  if (isSelected) {
    return (
      <div
        data-state={isSelected ? 'active' : 'inactive'}
        role="tabpanel"
        aria-labelledby={triggerId}
        id={contentId}
        tabIndex={0}
        {...props}
        ref={ref}
      />
    );
  }

  return null;
});

TabsContent.displayName = 'TabsContent';

export { Tabs, TabsContent, TabsList, TabsTrigger };

/* ---------------------------------------------------------------------------------------------- */

function makeTriggerId(baseId: string, value: string) {
  return `${baseId}-trigger-${value}`;
}

function makeContentId(baseId: string, value: string) {
  return `${baseId}-content-${value}`;
}

function composeEventHandlers<E>(
  originalEventHandler?: (event: E) => void,
  ourEventHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {},
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);

    if (checkForDefaultPrevented === false || !(event as unknown as Event).defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}
