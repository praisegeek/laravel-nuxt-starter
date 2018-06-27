<template>
    <header class="navbar is-transparent is-fixed-top" :class="view">
        <div class="container">
            <div class="navbar-brand">
                <nuxt-link to="/" class="navbar-item">
                    <img src="/images/logo.png" alt="logo">
                </nuxt-link>
                <span class="navbar-burger burger has-text-white" data-target="navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div class="navbar-menu" id="navigation">
                <div class="navbar-end">
                    <nuxt-link to="/" class="navbar-item is-active">HOME</nuxt-link>
                    <nuxt-link to="/about" class="navbar-item">ABOUT US</nuxt-link>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a href="" class="navbar-link">EXPLORE</a>
                        <div class="navbar-dropdown">
                            <nuxt-link to="/projects" class="navbar-item">PROJECTS</nuxt-link>
                            <nuxt-link to="/blog" class="navbar-item">BLOG</nuxt-link>
                            <nuxt-link to="/press" class="navbar-item">PRESS</nuxt-link>
                            <nuxt-link to="/campaigns" class="navbar-item">CAMPAIGNS</nuxt-link>
                            <nuxt-link to="/videos" class="navbar-item">VIDEOS</nuxt-link>
                        </div>
                    </div>
                    <nuxt-link to="/projects" class="navbar-item virtual">PROJECTS</nuxt-link>
                    <nuxt-link to="/blog" class="navbar-item virtual">BLOG</nuxt-link>
                    <nuxt-link to="/press" class="navbar-item virtual">PRESS</nuxt-link>
                    <nuxt-link to="/campaigns" class="navbar-item virtual">CAMPAIGNS</nuxt-link>
                    <nuxt-link to="/videos" class="navbar-item virtual">VIDEOS</nuxt-link>
                    <nuxt-link to="/store" class="navbar-item">STORE</nuxt-link>
                    <div class="navbar-item has-button">
                        <p class="control">
                            <nuxt-link to="/donate" class="button is-theme">DONATE</nuxt-link>
                        </p>
                    </div>
                    <!-- <nuxt-link to="" class="navbar-item">
                        <span class="icon">
                            <i class="fas fa-search"></i>
                        </span>
                    </nuxt-link> -->
                </div>
            </div>
        </div>
    </header>    
</template>

<script>
export default {
  props: {
    view: {
      default: "default",
      type: String
    }
  },

  mounted() {
    var $burgers = document.querySelectorAll(".burger");
    if ($burgers.length > 0) {
      $burgers.forEach($el => {
        $el.addEventListener("click", () => {
          const target = $el.dataset.target;
          const $target = document.getElementById(target);
          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }

    // Modals

    const rootEl = document.documentElement;
    const $modals = document.querySelectorAll(".modal");
    const $modalButtons = document.querySelectorAll(".modal-button");
    const $modalCloses = document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    );

    if ($modalButtons.length > 0) {
      $modalButtons.forEach($el => {
        $el.addEventListener("click", () => {
          const target = $el.dataset.target;
          const $target = document.getElementById(target);
          rootEl.classList.add("is-clipped");
          $target.classList.add("is-active");
        });
      });
    }

    if ($modalCloses.length > 0) {
      $modalCloses.forEach($el => {
        $el.addEventListener("click", () => {
          closeModals();
        });
      });
    }

    document.addEventListener("keydown", event => {
      const e = event || window.event;
      if (e.keyCode === 27) {
        closeModals();
        closeDropdowns();
      }
    });

    function closeModals() {
      rootEl.classList.remove("is-clipped");
      $modals.forEach($el => {
        $el.classList.remove("is-active");
      });
    }

    var $myNavbar = document.querySelector("header.landing");

    if ($myNavbar) {
      var headroom = new Headroom($myNavbar, {
        offset: 50
      });
      headroom.init();
    }
  }
};
</script>
