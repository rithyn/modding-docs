import meta from "../../../pages/_meta.js";
import docs_meta from "../../../pages/docs/_meta.js";
import docs_Main_Code_Parts_meta from "../../../pages/docs/Main_Code_Parts/_meta.js";
import npm_meta from "../../../pages/npm/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "about",
  route: "/about",
  frontMatter: {
    "sidebarTitle": "About"
  }
}, {
  name: "community",
  route: "/community",
  frontMatter: {
    "sidebarTitle": "Community"
  }
}, {
  name: "content",
  route: "/content",
  frontMatter: {
    "sidebarTitle": "Content"
  }
}, {
  name: "docs",
  route: "/docs",
  children: [{
    data: docs_meta
  }, {
    name: "First_Mod",
    route: "/docs/First_Mod",
    frontMatter: {
      "sidebarTitle": "First Mod"
    }
  }, {
    name: "Main_Code_Parts",
    route: "/docs/Main_Code_Parts",
    children: [{
      data: docs_Main_Code_Parts_meta
    }, {
      name: "Aliens",
      route: "/docs/Main_Code_Parts/Aliens",
      frontMatter: {
        "sidebarTitle": "Aliens"
      }
    }, {
      name: "Asteroids",
      route: "/docs/Main_Code_Parts/Asteroids",
      frontMatter: {
        "sidebarTitle": "Asteroids"
      }
    }, {
      name: "Collectibles",
      route: "/docs/Main_Code_Parts/Collectibles",
      frontMatter: {
        "sidebarTitle": "Collectibles"
      }
    }, {
      name: "Map",
      route: "/docs/Main_Code_Parts/Map",
      frontMatter: {
        "sidebarTitle": "Map"
      }
    }, {
      name: "Objects",
      route: "/docs/Main_Code_Parts/Objects",
      frontMatter: {
        "sidebarTitle": "Objects"
      }
    }, {
      name: "Options",
      route: "/docs/Main_Code_Parts/Options",
      frontMatter: {
        "sidebarTitle": "Options"
      }
    }, {
      name: "Others_Instances",
      route: "/docs/Main_Code_Parts/Others_Instances",
      frontMatter: {
        "sidebarTitle": "Others Instances"
      }
    }, {
      name: "Problems",
      route: "/docs/Main_Code_Parts/Problems",
      frontMatter: {
        "sidebarTitle": "Problems"
      }
    }, {
      name: "Ship",
      route: "/docs/Main_Code_Parts/Ship",
      frontMatter: {
        "sidebarTitle": "Ship"
      }
    }, {
      name: "Step",
      route: "/docs/Main_Code_Parts/Step",
      frontMatter: {
        "sidebarTitle": "Step"
      }
    }, {
      name: "Ticking",
      route: "/docs/Main_Code_Parts/Ticking",
      frontMatter: {
        "sidebarTitle": "Ticking"
      }
    }, {
      name: "Tips",
      route: "/docs/Main_Code_Parts/Tips",
      frontMatter: {
        "sidebarTitle": "Tips"
      }
    }]
  }, {
    name: "Running_Mod",
    route: "/docs/Running_Mod",
    frontMatter: {
      "sidebarTitle": "Running Mod"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "npm",
  route: "/npm",
  children: [{
    data: npm_meta
  }, {
    name: "documentation",
    route: "/npm/documentation",
    frontMatter: {
      "sidebarTitle": "Documentation"
    }
  }, {
    name: "introduction",
    route: "/npm/introduction",
    frontMatter: {
      "sidebarTitle": "Introduction"
    }
  }]
}];