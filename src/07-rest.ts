import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'nicobytes',
  role: ROLES.COSTUMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

console.log('checkAdminRole: ', checkAdminRole())

const checkrole = (role1: string, role2: string) => {
  if(currentUser.role === role1) return true;
  if(currentUser.role === role2) return true;
  return false;
}

const rta = checkrole(ROLES.ADMIN, ROLES.SELLER)
console.log('checkRole', rta);

const checkroleV2 = (roles: string[]) => {
  if(roles.includes(currentUser.role)) return true;
  return false;
}

const rta2 = checkroleV2([ROLES.ADMIN, ROLES.SELLER])
console.log('checkRole', rta);

const checkroleV3 = (...roles: string[]) => {
  if(roles.includes(currentUser.role)) return true;
  return false;
}

const rta3 = checkroleV3(ROLES.ADMIN, ROLES.SELLER)
console.log('checkRole', rta);
