import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Exchange'),
    href: '/swap',
    icon: 'Swap',
    showItemsOnMobile: false,
    hideSubNav: true,
    items: [],
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
