import { LifeCycles, registerApplication, start } from "single-spa";

registerApplication({
  name: "@anf-mfe/header",
  app: () => System.import<LifeCycles>("@anf-mfe/header"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});

window.addEventListener('single-spa:first-mount', () => {
  registerApplication({
    name: "@anf-mfe/employees",
    app: () => System.import<LifeCycles>("@anf-mfe/employees"),
    activeWhen: ["/employees"],
  });

  registerApplication({
    name: "@anf-mfe/settings",
    app: () => System.import<LifeCycles>("@anf-mfe/settings"),
    activeWhen: ["/settings"],
  });

  registerApplication({
    name: "settings-angular",
    app: () => System.import<LifeCycles>("settings-angular"),
    activeWhen: ["/settings-angular"],
  });
});
