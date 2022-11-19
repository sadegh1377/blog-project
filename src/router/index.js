import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/views/HomePage";
import UserSettings from "@/views/privatePages/UserSettings";

Vue.use(VueRouter)

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
    meta: {
      requiresAuth: false,
      title: 'Home Page',
      metaTags: [
        {
          name: 'Home Page',
          content: 'Home Page'
        }
      ]

    }
  },
  {
    name: "UserSettings",
    path: "/user-settings",
    component: UserSettings,
    meta: {
      requiresAuth: true,
      title: 'User Settings',
      metaTags: [
        {
          name: 'User Settings',
          content: 'User Settings'
        }
      ]

    }
  },
  {
    name: "SignIn",
    path: "/sign-in",
    component: () => import("../views/authentication/SignIn"),
    meta: {
      requiresAuth: false,
      title: 'Sign in',
      metaTags: [
        {
          name: 'Sign in',
          content: 'Sign in'
        }
      ]
    }
  },
  {
    name: "SignUp",
    path: "/sign-up",
    component: () => import("../views/authentication/SignUp"),
    meta: {
      requiresAuth: false,
      title: 'Sign up',
      metaTags: [
        {
          name: 'Sign up',
          content: 'Sign up'
        }
      ]
    }
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

router.beforeEach((to, from, next) => {


  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    if (localStorage.getItem("jwt")) {
      next();
    } else {
      next({
        name: "SignIn"
      })
    }
  } else {
    next();
  }
})

export default router