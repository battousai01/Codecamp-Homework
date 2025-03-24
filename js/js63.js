const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };

// Merging all objects, giving priority from permission4 to permission1
const permission = {
  ...permission1,
  ...permission2,
  ...permission3,
  ...permission4
};

console.log(permission);
