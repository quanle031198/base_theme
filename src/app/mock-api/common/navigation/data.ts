/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import {AuthoritiesConstant} from "../../../authorities.constant";
export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'monitor',
        title   : 'Monitor',
        type    : 'collapsable',
        icon    : 'heroicons_outline:home',
        role: [],
        children: [
            {
                id      : 'dashboard',
                title   : 'Dashboard',
                type    : 'basic',
                // icon    : 'heroicons_outline:home',
                link : '/dashboard',
                role: [],
            },
            {
                id      : 'viewLog',
                title   : 'View Log',
                type    : 'basic',
                // icon    : 'heroicons_outline:home',
                link : '/view-log',
                role: [],
            }
        ]
    },
    {
        id      : 'tenantManagement',
        title   : 'Tenant Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/tenant-management',
        role: [],
    },
    {
        id      : 'contractManagement',
        title   : 'Contract Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/contract-management',
        role: [],
    },
    {
        id      : 'planManagement',
        title   : 'Plan Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/plan-management',
        role: [],
    },
    {
        id      : 'userManagement',
        title   : 'User Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/user-manangement',
        role: [],
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'monitor',
        title   : 'Monitor',
        type    : 'collapsable',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'tenantManagement',
        title   : 'Tenant Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/tenant-management',
    },
    {
        id      : 'contractManagement',
        title   : 'Contract Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/contract-management',
    },
    {
        id      : 'planManagement',
        title   : 'Plan Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/plan-management',
    },
    {
        id      : 'userManagement',
        title   : 'User Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/user-manangement',
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'monitor',
        title   : 'Monitor',
        type    : 'collapsable',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'tenantManagement',
        title   : 'Tenant Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/tenant-management',
    },
    {
        id      : 'contractManagement',
        title   : 'Contract Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/contract-management',
    },
    {
        id      : 'planManagement',
        title   : 'Plan Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/plan-management',
    },
    {
        id      : 'userManagement',
        title   : 'User Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/user-manangement',
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'monitor',
        title   : 'Monitor',
        type    : 'collapsable',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'tenantManagement',
        title   : 'Tenant Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/tenant-management',
    },
    {
        id      : 'contractManagement',
        title   : 'Contract Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/contract-management',
    },
    {
        id      : 'planManagement',
        title   : 'Plan Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/plan-management',
    },
    {
        id      : 'userManagement',
        title   : 'User Management',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/user-manangement',
    }
];
