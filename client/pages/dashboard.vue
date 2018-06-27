<template>
    <div>
        <nav class="dashboard-subheader navbar">
            <div class="container is-fluid">
                <div class="navbar-brand">
                    <span class="navbar-burger burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-start">
                        <div class="navbar-item">
                            <breadcrumb></breadcrumb>
                        </div>
                    </div>
                    <div class="navbar-end has-divider">
                        <!-- <div class="navbar-item">
                            <div class="notification is-warning">
                                <button class="delete"></button>
                                <div class="level">
                                    <div class="level-item icon">
                                        <i class="fa fa-flag"></i>
                                    </div>
                                    <p class="level-item">New Post Added!</p>
                                </div>
                            </div>
                        </div> -->
                        <nuxt-link to="#" class="navbar-item has-text-dark">
                            <span class="icon dashboard-icons">
                                <i class="fa fa-flag"></i>
                            </span>
                        </nuxt-link>
                        <nuxt-link to="#" class="navbar-item has-text-dark">
                            <span class="icon dashboard-icons">
                                <i class="fa fa-cog"></i>
                            </span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </nav>
        
        <div class="block">
            <p>Welcome back {{ user.displayName }}</p>

            <a href="#" @click.prevent="logout">Sign Out | {{ user.displayName }}</a>
        </div>

    </div>
</template>

<script>
import Breadcrumb from "@/components/partials/breadcrumb";
export default {
  layout: "authenticated",
  components: {
    Breadcrumb
  }
};
</script>