const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];

// const newArrayRoutes = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// },[]);


const newArray = adminPaths2.reduce((acc,item)=>{
  item(item.path && item.element ){
    acc.push({
      key:item.path
      lebel:item.name
    })
  }
})
console.log(JSON.stringify(newArray));
