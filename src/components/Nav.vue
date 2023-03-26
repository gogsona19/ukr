<template>
    <div>
        <section>
            <nav class="navbar mt-4 navbar-expand-lg navbar-dark bg-default">
                <div class="container">
                    <a href="/#" class="navbar-brand">For Ukrine</a>
                    <button type="button" @click="phonemenu" data-toggle="collapse" data-target="navbar-primary"
                        aria-controls="navbar-primary" aria-label="Toggle navigation" class="navbar-toggler"><span
                            class="navbar-toggler-icon"></span></button>
                    <div id="navbar-default" :class="[collapse, navcls, showclas]">
                        <div class="navbar-collapse-header">
                            <div class="row">
                                <div class="col-6 collapse-brand">
                                    <a href="./index.html">For Ukrine</a>
                                </div>
                                <div class="col-6 collapse-close">
                                    <button type="button" data-toggle="collapse" @click="removeclass"
                                        data-target="#navbar-default" aria-controls="navbar-default"
                                        aria-label="Toggle navigation" class="navbar-toggler">
                                        <span></span><span></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <ul class="navbar-nav ml-lg-auto">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">Home</router-link>
                            </li>
                            <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
                            <li class="nav-item"><router-link to="/News" class="nav-link">News</router-link></li>
                            <li class="nav-item dropdown">
                                <a href="#" id="navbar-primary_dropdown_1" role="button" data-toggle="dropdown"
                                    @click="dropdown = !dropdown" class="nav-link">Services
                                </a>
                                <div aria-labelledby="navbar-primary_dropdown_1" v-if="dropdown"
                                    class="dropdown-menu dropdown-menu-right">
                                    <a href="#" class="dropdown-item">Buy</a><a href="#" class="dropdown-item">Rent
                                    </a>
                                    <div class="dropdown-divider"></div><a href="/contact" class="dropdown-item">Contact</a>
                                </div>
                            </li>
                            <li class="nav-item"><router-link to="/Gallery" class="nav-link">Gallery</router-link></li>
                            <li class="nav-item"><router-link to="/Video" class="nav-link">Video</router-link></li>
                            <li class="nav-item"><router-link to="/Contact" class="nav-link">Contact</router-link></li>
                        </ul>
                        <ul class="navbar-nav align-items-lg-center ml-lg-auto">


                            <li class="nav-item d-none d-lg-block ml-lg-4">
                                <a href="/Auth/login" rel="noopener" class="btn btn-neutral btn-icon">
                                    <span class="btn-inner--icon">
                                        <i class="ni ni-lock-circle-open"></i>
                                        <svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="person-to-portal" role="img" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            class="hover-icon svg-inline--fa fa-person-to-portal fa-xl">
                                            <path fill="currentColor"
                                                d="M272 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-90.7 12.6c-14-3.5-28.7-3.5-42.7 0l-1.8 .5c-13.3 3.3-25.6 9.7-35.9 18.6L56.4 165.8c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6l44.5-38.2c4.7-4 10.3-6.9 16.3-8.4l1.8-.5c6.4-1.6 13-1.6 19.4 0l8.6 2.1-32.7 98c-8.5 25.5 2.3 53.4 25.7 66.5l88 49.5L225.1 480.8c-4 12.7 3.1 26.1 15.7 30.1s26.1-3.1 30.1-15.8L307 379.5c5.6-18-2.1-37.5-18.6-46.8l-32.1-18 28.1-84.4 5.6 18.2C297.3 272 319 288 343.6 288H352h16.5H392c13.3 0 24-10.7 24-24s-10.7-24-24-24H368.1c1.2-82.9 11.4-134.5 24.1-164c12.4-28.7 22.4-28.1 23.7-28l.1 0 .1 0c1.3-.1 11.3-.7 23.7 28c13.5 31.4 24.2 87.7 24.2 180s-10.7 148.6-24.2 180c-12.4 28.7-22.4 28.1-23.7 28l-.1 0-.1 0c-1.3 .1-11.3 .7-23.7-28c-10.1-23.4-18.6-60.5-22.2-116H352 321.9c8.8 140.7 47.6 192 94.1 192c53 0 96-66.6 96-256S469 0 416 0c-46.2 0-84.8 50.6-93.9 189.1l-5.8-18.9c-5.8-18.7-20.9-33.1-39.9-37.9l-95-23.7zm70.8 67.2l-38.3 115-19-10.7c-3.3-1.9-4.9-5.9-3.7-9.5L225 169l27.1 6.8zM122.5 317.1L103.4 368H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h84.9c16.7 0 31.6-10.3 37.4-25.9l14.1-37.6-4.9-2.8c-14.1-8-25.4-19.3-33-32.6z"
                                                class=""></path>
                                        </svg>
                                    </span>
                                    <span class="nav-link-inner--text"> Login</span></a>
                            </li>
                        </ul>
<div class="flagsmenu">
                        <div class="dropdown" @click="flagsdrop = !flagsdrop">
                            <a href="#" class="btn btn-default dropdown-toggle " data-toggle="dropdown"
                                id="navbarDropdownMenuLink2">
                                <img
                                    src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/US.png" />
                                Flags
                            </a>
                            <ul class="dropdown-menu flagsdrop" v-if="flagsdrop" aria-labelledby="navbarDropdownMenuLink2">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <img  src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/UA.png" />
                                        Ukrain(UA)
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <img
                                            src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/GB.png" />
                                        English(UK)
                                    </a>
                                </li>

                            </ul>
                        </div>
</div>
                    </div>
                </div>
            </nav>
            <!--<div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>-->
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: false,
            flagsdrop :false,
            collapse: 'collapse',
            navcls: 'navbar-collapse',
            showclas: ''
            
        }
    },
    methods: {
        phonemenu() {
            this.showclas = 'show'
        },
        removeclass() {
            this.showclas = ''
        }
    },
    mounted() {

    }
}
</script>
<style scoped>
.bg-default[data-v-65af85a3] {
    background-color: #3d6cbf !important;
}
svg.hover-icon.svg-inline--fa.fa-person-to-portal.fa-xl {
    width: 16px;
    padding: 0;
    margin: 3px 10px 0 0;
    float: left;
    display: none;
}

a.btn.btn-neutral.btn-icon:hover svg.hover-icon.svg-inline--fa.fa-person-to-portal.fa-xl {
    display: block !important;
}

a.btn.btn-neutral.btn-icon:hover i.ni.ni-lock-circle-open {
    display: none !important;
}

.bg-default {
    background-color: #6772e5 !important;
}

nav.navbar.mt-4.navbar-expand-lg.navbar-dark.bg-default {
    margin-top: 0px !important;
}

ul.navbar-nav.ml-lg-auto {
    pointer-events: all;
}

.dropdown-menu {
    display: block;
    opacity: 1 !important;
}

.dropdown-menu.dropdown-menu-right {
    z-index: 999 !important;
}

@media (min-width: 992px) {
    .navbar-nav .dropdown-menu {
        display: block;
        opacity: 1;
        pointer-events: all;
    }

}

@media (max-width: 992px) {
    .navbar-nav .dropdown-menu {
        display: block;
        opacity: 1;
        pointer-events: all;
    }

    .navbar-nav .nav-link:hover {
        background: #5c8de091;
    }
}</style>