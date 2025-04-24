'use client';
import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import { ActionIcon, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import classes from './toggle-theme.module.css';

export function ActionToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  const isLight = computedColorScheme === 'light';

  return (
    <Group justify="center">
      <ActionIcon
        onClick={toggleColorScheme}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        {isLight ? (
          <IconMoon className={cx(classes.icon)} stroke={1.5} />
        ) : (
          <IconSun className={cx(classes.icon)} stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  );
}
