<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
import { config } from "../config";

export default {
  data() {
    return {
      menu: [
        {
          header: config.appName,
          hiddenOnCollapse: true, 
        },
        {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user",
        },
        {
          href: "/charts",
          title: "Charts",
          icon: "fa fa-chart-area",
          child: [
            {
              href: "/charts/sublink",
              title: "Sub Link",
            },
          ],
        },
      ],
    };
  },
};
</script>
