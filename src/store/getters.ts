const getters = {
  permissionRoutes: (state: any) => state.permission.addRoutes,
  routes: (state: any) => state.permission.routes,
  userInfo: (state: any) => state.app.userInfo
};
export default getters;
