<template>
    <div>
        <header class="navbar is-fixed-top dashboard-navbar">
            <div class="container is-fluid">
                <div class="navbar-brand">
                    <nuxt-link to="#" class="navbar-item">
                        Logo
                    </nuxt-link>
                    <span class="navbar-burger burger" data-target="admin-nav">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div class="navbar-menu" id="admin-nav">
                    <div class="navbar-start">
                        <a href="" class="navbar-item">
                            <span class="icon has-text-white">
                                <i class="fa fa-list"></i>
                            </span>
                        </a>
                        <span class="navbar-item">
                            LoveworldSAT Admin
                        </span>
                    </div>
                    <div class="navbar-end">
                        <nuxt-link to="#" class="navbar-item">
                            <span class="icon with-notification">
                                <i class="fa fa-bell"></i>
                            </span>
                        </nuxt-link>
                        <div to="#" class="navbar-item has-dropdown is-hoverable">
                            <a href="" class="navbar-link">
                                <figure class="image is-24x24 with-avatar">
                                    <img src="/images/avatar8.jpg" alt="Avatar">
                                </figure>    
                            </a>
                            <div class="navbar-dropdown">
                                <nuxt-link to="#" class="navbar-item">My Profile</nuxt-link>
                                <nuxt-link to="#" class="navbar-item">Inbox</nuxt-link>
                                <div class="navbar-divider"></div>
                                <nuxt-link to="#" class="navbar-item">Logout</nuxt-link>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </header>

        <section class="dashboard-body">
            <div class="columns is-variable is-0">
                <aside class="column dashboard-body__sidebar">
                    <div class="menu">
                        <div class="with-search-input with-border">
                            <span class="icon">
                                <i class="fa fa-search"></i>
                            </span>
                            <input type="text" class="input" placeholder="Enter search...">
                        </div>
                        <p class="menu-label">
                            Manage
                        </p>
                        <ul class="menu-list">
                            <li>
                                <nuxt-link to="http://">
                                    <span class="icon">
                                        <i class="fa fa-user"></i>
                                    </span>
                                    <span>Profile</span>
                                </nuxt-link>
                            </li>
                        </ul>

                        <p class="menu-label">
                            Admin
                        </p>
                        <ul class="menu-list">
                            <li>
                                <nuxt-link to="http://">
                                    <span class="icon">
                                        <i class="fa fa-map"></i>
                                    </span>
                                    <span>Schedules</span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="http://">
                                    <span class="icon">
                                        <i class="fa fa-hand-rock"></i>
                                    </span>
                                    <span>Permissions</span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="http://">
                                    <span class="icon">
                                        <i class="fa fa-rocket"></i>
                                    </span>
                                    <span>Export CSV</span>
                                </nuxt-link>
                            </li>
                            
                        </ul>
                    </div>

                    <div class="menu-footer">
                        <div class="level">
                            <div class="level-item">
                                <span class="icon">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                            <a class="level-item">
                                Sign Out
                            </a>
                        </div>
                    </div>
                </aside>
                <div class="column dashboard-body__content">
                    <nuxt></nuxt>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  middleware: "auth",
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>
