const routes = [
  {
    path: "/",
    component: () => import("layouts/CreateNewAccount.vue"),
    children: [
      { path: "/", component: () => import("src/pages/Page-Router.vue") },
      {
        path: "/Create-Account-Step1",
        component: () => import("src/pages/Create-Account-Step1.vue"),
      },
      {
        path: "/Create-Account-Step2",
        component: () => import("src/pages/Create-Account-Step2.vue"),
      },
      {
        path: "/Create-Account-Step2-1",
        component: () => import("src/pages/Create-Account-Step2-1.vue"),
      },
      {
        path: "/Create-Account-Step3",
        component: () => import("src/pages/Create-Account-Step3.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/Contractor-profile-display",
        component: () => import("src/pages/Contractor-profile-display.vue"),
      },
      {
        path: "/Create-Contractor-Profile",
        component: () => import("src/pages/Create-Contractor-Profile.vue"),
      },
      {
        path: "/Create-Contractor-freelancer-profile",
        component: () =>
          import("src/pages/Create-Contractor-freelancer-profile.vue"),
      },
      {
        path: "/Create-Client-Profile",
        component: () => import("src/pages/Create-Client-Profile.vue"),
      },
      {
        path: "/Create-Client-Company-Profile",
        component: () => import("src/pages/Create-Client-Company-Profile.vue"),
      },
      {
        path: "/Client-Company-Profile-Doc-Verification",
        component: () =>
          import("src/pages/Client-Company-Profile-Doc-Verification.vue"),
      },
      {
        path: "/Client-Profile-Doc-Verification",
        component: () =>
          import("src/pages/Client-Profile-Doc-Verification.vue"),
      },
      {
        path: "/Client-Profile-Display",
        component: () => import("src/pages/Client-Profile-Display.vue"),
      },
      {
        path: "/Contractor-freelancer-profile-display",
        component: () =>
          import("src/pages/Contractor-freelancer-profile-display.vue"),
      },
      {
        path: "/Client-Company-Profile-Display",
        component: () => import("src/pages/Client-Company-Profile-Display.vue"),
      },
      {
        path: "/Create--Contractor-Company-Profile-Add-Freelancers",
        component: () =>
          import(
            "src/pages/Create--Contractor-Company-Profile-Add-Freelancers.vue"
          ),
      },
      {
        path: "/01-remote-work-Client-Post-Proj",
        component: () =>
          import("src/pages/01-remote-work-Client-Post-Proj.vue"),
      },
      {
        path: "/02-remote-work-Client-Post-Proj",
        component: () =>
          import("src/pages/02-remote-work-Client-Post-Proj.vue"),
      },
      {
        path: "/03-remote-work-Client-Post-Proj",
        component: () =>
          import("src/pages/03-remote-work-Client-Post-Proj.vue"),
      },
      {
        path: "/04-remote-work-Client-Post-Proj",
        component: () =>
          import("src/pages/04-remote-work-Client-Post-Proj.vue"),
      },
      {
        path: "/05-remote-work-Client-Post-Proj",
        component: () =>
          import("src/pages/05-remote-work-Client-Post-Proj.vue"),
      },
      {
        path: "/16-remote-work-Client-Milestone-Details-for-Agency",
        component: () =>
          import(
            "src/pages/16-remote-work-Client-Milestone-Details-for-Agency.vue"
          ),
      },
      {
        path: "/08-Remote-Work-Contractor-Application-To-Project-By-Freelancer",
        component: () =>
          import(
            "src/pages/08-Remote-Work-Contractor-Application-To-Project-By-Freelancer.vue"
          ),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
