import { MenuItemsType, DropdownMenuItemType } from '@dragonchaindex/toolkit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Pool'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Pools'),
    href: '/pools',
    icon: 'Pool',
    showItemsOnMobile: false,
    hideSubNav: true,
    items: [],
  },
  {
    label: t('Farms'),
    href: '/farms',
    icon: 'Earn',
    showItemsOnMobile: false,
    hideSubNav: true,
    items: [],
  },
  {
    label: 'Info',
    href: '/info',
    icon: 'Info',
    showItemsOnMobile: false,
    hideSubNav: true,
    items: [],
  },
]

export default config
