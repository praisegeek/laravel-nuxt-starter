<template>
    <div>
        <nuxt/>
        <section class="_section join has-background">
            <img src="/images/network-bg.svg" alt="Volunteers Network" class="is-background__top">
            <div class="container">
                <div class="columns center-columns">
                    <div class="column">
                        <figure class="image is-16by9">
                            <img src="/images/pic-ribbons.svg" alt="People Volunteers">
                        </figure>
                    </div>
                    <div class="column">
                        <h3 class="title">Join Our Network</h3>
                        <p class="subtitle is-6 measure">
                            We are building a healthier world through volunteers who have signed up to make a difference through blood donations, medical practice and financial donations
                        </p>
                        <nuxt-link to="#" class="button is-theme">
                            GET STARTED
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="_section footer">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h4 class="subtitle is-6">About VMC</h4>
                        <ul>
                            <li><a href="http://">About Us  / Mission  / Vision</a></li>
                            <li><a href="http://">Volunteer</a></li>
                            <li><a href="http://">Press</a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <h4 class="subtitle is-6">Help &amp; SupportC</h4>
                        <ul>
                            <li><a href="http://">Help Center</a></li>
                            <li><a href="http://">Resource Center</a></li>
                            <li><a href="http://">Blog</a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <h4 class="subtitle is-6">Connect</h4>
                        <ul>
                            <li><a href="http://">@vmcnigeria</a></li>
                            <li><a href="http://">Facebook</a></li>
                            <li><a href="http://">Twitter</a></li>
                            <li><a href="http://">Instagram</a></li>
                            <li><a href="http://">KingsChat</a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <form class="box has-center-content">
                            <p class="icon row">
                                <i class="fas fa-2x fa-inbox"></i>
                            </p>
                            <p class="subtitle is-6 has-text-centered">
                                Get tips and tricks in your inbox every week.
                            </p>
                            <div class="field is-grouped">
                                <p class="control">
                                    <input type="text" class="input" placeholder="Email address...">
                                </p>
                                <p class="control">
                                    <button class="button default is-theme">
                                        <span class="icon">
                                            <i class="fas fa-check"></i>
                                        </span>
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <footer class="is-clearfix row__medium">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <p>
                                VMC is a global NGO located in Lagos, Nigeria.
                            </p>
                        </div>
                        <div class="column">
                            <div class="level">
                                <a href="#" class="level-item">Privacy Policy</a>
                                <a href="" class="level-item">Terms of Use</a>
                                <a href="" class="level-item">Site Map</a>
                                <a href="" class="level-item">&copy; 2018 VMC.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    </div>
</template>