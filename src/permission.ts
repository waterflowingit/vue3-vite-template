import router from "./router";
import store from "./store";
router.beforeEach(async (to, from, next) => {
  const hasRoutes = store.getters.routes;

  if (hasRoutes[0]) {
    next();
  } else {
    let roles = [];
    roles = ["admin"];
    // generate accessible routes map based on roles
    const accessRoutes = await store.dispatch(
      "permission/generateRoutes",
      roles
    );
    // dynamically add accessible routes
    accessRoutes.forEach((element: any) => {
      router.addRoute(element);
    });
    next({
      path: to.path,
      replace: true
    });
  }
});

router.afterEach(() => {
  // finish progress bar
});
