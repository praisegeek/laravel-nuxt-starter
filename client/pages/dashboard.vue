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
                    <div class="navbar-end with-divider">
                        <div class="navbar-item">
                            <div class="message is-danger is-small">
                                <div class="message-body is-paddingless">
                                    <div class="level">
                                        <div class="level-item icon">
                                            <i class="fa fa-exclamation-triangle"></i>
                                        </div>
                                        <div class="level-item">You have pending reports</div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        
        <div class="row">
            <article class="box is-shadowless">
                <p>Welcome back {{ user.displayName }}</p>

                <a href="#" @click.prevent="logout">Sign Out | {{ user.displayName }}</a>

                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
            </article>
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