<template>
    <nav class="breadcrumb" aria-label="breadcrumbs" :class="separator">
        <ul>
            <li
                v-for="(breadcrumb, idx) in breadcrumbList"
                :key="idx"
                :class="{'is-active': idx == breadcrumbList.length - 1 }">
                <a href="#" @click.prevent="routeTo(breadcrumb)">
                     {{ breadcrumb === '' ? 'Home' : breadcrumb }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  props: {
    separator: {
      default: "has-succeeds-separator is-small", // has-dot-separator, has-bullet-separator, has-arrow-separator
      type: String
    }
  },
  data() {
    return {
      breadcrumbList: []
    };
  },
  mounted() {
    this.updateList();
  },
  watch: {
    $route(to, from) {
      this.updateList();
    }
  },
  methods: {
    routeTo(r = null) {
      if (r === null) {
        this.$router.push("/");
      }
      const path = this.$route.matched[0].path;
      const regex = `.+?(?=${r})+${r}`;
      const link = new RegExp(regex, "g").exec(path)[0];
      this.$router.push(link);
    },
    updateList() {
      this.breadcrumbList = this.$route.path.split("/");
    }
  }
};
</script>

<style>
</style>
