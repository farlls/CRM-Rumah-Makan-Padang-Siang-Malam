import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilArrowCircleLeft,
  cilArrowCircleRight,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Menu',
  },
  {
    component: CNavItem,
    name: 'Pemasukan',
    to: '/theme/colors',
    icon: <CIcon icon={cilArrowCircleRight} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pengeluaran',
    to: '/tbpemasukan',
    icon: <CIcon icon={cilArrowCircleLeft} customClassName="nav-icon" />,
  },
]

export default _nav
