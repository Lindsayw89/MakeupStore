import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'

export const SidebarData=[

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Specials',
        path: '/specials',
        icon: null,
        cName: 'nav-text'
    },
    {
        title: 'Top Rated',
        path: '/toprated',
        icon: null,
        cName: 'nav-text'
    }
]