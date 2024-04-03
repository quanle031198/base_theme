export interface User {
    authorityMapper: AuthorityMapper;
    id:              number;
    login:           string;
    passwordHash:    string;
    firstName:       string;
    lastName:        string;
    email:           string;
    imageUrl:        any;
    activated:       boolean;
    langKey:         string;
    createBy:        any;
    createAt:        any;
    updateBy:        any;
    updateAt:        any;
    authorities:     Authority[];
    hdfsUserList:    any[];
    userName:        any;
    passWord:        any;
    ssoUserId:       any;
    phoneNumber:     any;
    staffCode:       any;
    teamId:          number;
    typeUser:        number;
    team:            Team;
    ipAddress:       any;
    userIpList:      any;
    status:          number;
    roleGroup:       RoleGroup;
    listRoleGroup:   RoleGroup[];
}

export interface Authority {
    id:             any;
    name:           any;
    description:    any;
    activated:      any;
    permissionList: any;
    moduleName:     any | string;
    code:           string;
    moduleId:       number | any;
    permissionId:   number;
}

export interface AuthorityMapper {
}

export interface RoleGroup {
    id:          number;
    name:        string;
    description: any;
    activated:   number;
}

export interface Team {
    id:          number;
    name:        string;
    description: any;
    teamAcc:     any;
    activated:   number;
    updateBy:    string;
    updateAt:    string;
}
