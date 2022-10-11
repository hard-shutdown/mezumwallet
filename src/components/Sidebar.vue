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
          title: `${config.chains["eth"].name}`,
          icon: "fa fa-user",
        },
        {
          href: "/addWallet",
          title: "New Wallet",
          icon: "fa fa-chart-area",
        },
      ],
    };
  },
};
</script>
