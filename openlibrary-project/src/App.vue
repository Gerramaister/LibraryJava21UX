<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito Sans" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Radley" />

    <div class="About">
    <AboutVue />
    </div>
    <router-link to="/" class="topbar"> read-y </router-link>
    <div class="container padding-bottom">
        <router-view> </router-view>
    </div>
    <div class="container-fluid px-0 fixed-bottom">
        <div class="collapse" id="collapseExample">
            <SearchBar/>
            <DropUpBar/>
        </div>
    </div>

    <nav class="navbar fixed-bottom bottom-bar">
        <div class="container-fluid px-4">
            <button class="btn" style="background-color-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.8851 12.4457C9.23482 14.5684 5.35538 14.4013 2.8986 11.9445C0.26256 9.3085 0.26256 5.03464 2.8986 2.3986C5.53464 -0.23744 9.8085 -0.23744 12.4445 2.3986C14.9013 4.85538 15.0684 8.73481 12.9457 11.3851L18.1014 16.5407C18.3943 16.8336 18.3943 17.3085 18.1014 17.6014C17.8085 17.8943 17.3336 17.8943 17.0407 17.6014L11.8851 12.4457ZM3.95926 10.8839C1.90901 8.83363 1.90901 5.50951 3.95926 3.45926C6.00951 1.40901 9.33363 1.40901 11.3839 3.45926C13.4326 5.50801 13.4341 8.82875 11.3884 10.8794C11.3869 10.8809 11.3854 10.8823 11.3839 10.8839C11.3824 10.8854 11.3809 10.8869 11.3794 10.8884C9.32876 12.9341 6.00801 12.9326 3.95926 10.8839Z"
                        fill="white"
                    />
                </svg>
            </button>

            <router-link to="/MyLists" class="navbar-brand">
                <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.1023 16.636C11.2302 16.7128 11.3671 16.7468 11.5 16.7451C11.6329 16.7468 11.7698 16.7128 11.8977 16.636L13.033 15.9548C15.2595 14.619 17.9825 14.4008 20.3933 15.3651C21.2826 15.7208 22.25 15.0659 22.25 14.108V2.44915C22.25 1.8712 21.8981 1.35148 21.3615 1.13683C18.2564 -0.105202 14.7492 0.17582 11.8815 1.89644L11.5 2.12536L11.1185 1.89644C8.25077 0.17582 4.74357 -0.105202 1.63848 1.13683C1.10187 1.35148 0.75 1.8712 0.75 2.44915V14.108C0.75 15.0659 1.71739 15.7208 2.60672 15.3651C5.01752 14.4008 7.74052 14.619 9.96701 15.9548L11.1023 16.636ZM2.25 2.50798V13.8948C5.04579 12.8467 8.17179 13.1284 10.7388 14.6686L10.75 14.6754V3.42464L10.3467 3.18268C7.89774 1.71329 4.90634 1.46495 2.25 2.50798ZM12.2612 14.6686L12.25 14.6754V3.42464L12.6533 3.18268C15.1023 1.71329 18.0937 1.46495 20.75 2.50798V13.8948C17.9542 12.8467 14.8282 13.1284 12.2612 14.6686Z"
                        fill="#F2F2F2"
                    />
                    <path
                        d="M8.77516 17.0422C6.7513 15.8617 4.2487 15.8617 2.22484 17.0422L2.1221 17.1022C1.76431 17.3109 1.64346 17.7701 1.85217 18.1279C2.06088 18.4857 2.52011 18.6065 2.8779 18.3978L2.98065 18.3379C4.53746 17.4298 6.46254 17.4298 8.01935 18.3379L9.10661 18.9721C10.5856 19.8349 12.4144 19.8349 13.8934 18.9721L14.9806 18.3379C16.5375 17.4298 18.4625 17.4298 20.0194 18.3379L20.1221 18.3978C20.4799 18.6065 20.9391 18.4857 21.1478 18.1279C21.3565 17.7701 21.2357 17.3109 20.8779 17.1022L20.7752 17.0422C18.7513 15.8617 16.2487 15.8617 14.2248 17.0422L13.1376 17.6765C12.1257 18.2668 10.8743 18.2668 9.86242 17.6765L8.77516 17.0422Z"
                        fill="#F2F2F2"
                    />
                </svg>
            </router-link>
            <router-link to="/QuizCategoryView" class="navbar-brand">
                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.50002 5.25C6.91423 5.25 7.25002 5.58579 7.25002 6V7.25H8.50002C8.91423 7.25 9.25002 7.58579 9.25002 8C9.25002 8.41421 8.91423 8.75 8.50002 8.75H7.25002V10C7.25002 10.4142 6.91423 10.75 6.50001 10.75C6.0858 10.75 5.75002 10.4142 5.75002 10V8.75H4.50002C4.0858 8.75 3.75002 8.41421 3.75002 8C3.75002 7.58579 4.0858 7.25 4.50002 7.25H5.75002V6C5.75002 5.58579 6.0858 5.25 6.50002 5.25Z"
                        fill="#F2F2F2"
                    />
                    <path
                        d="M15.5 9.75C15.5 9.19771 15.0523 8.75 14.5 8.75C13.9477 8.75 13.5 9.19771 13.5 9.75V10C13.5 10.5523 13.9477 11 14.5 11C15.0523 11 15.5 10.5523 15.5 10V9.75Z"
                        fill="#F2F2F2"
                    />
                    <path
                        d="M14.5 5C15.0523 5 15.5 5.44772 15.5 6V6.25C15.5 6.80228 15.0523 7.25 14.5 7.25C13.9477 7.25 13.5 6.80228 13.5 6.25V6C13.5 5.44772 13.9477 5 14.5 5Z"
                        fill="#F2F2F2"
                    />
                    <path
                        d="M17.5 8C17.5 8.55229 17.0523 9 16.5 9H16.25C15.6977 9 15.25 8.55228 15.25 8C15.25 7.44771 15.6977 7 16.25 7H16.5C17.0523 7 17.5 7.44772 17.5 8Z"
                        fill="#F2F2F2"
                    />
                    <path
                        d="M12.75 9C13.3023 9 13.75 8.55229 13.75 8C13.75 7.44772 13.3023 7 12.75 7H12.5C11.9477 7 11.5 7.44771 11.5 8C11.5 8.55228 11.9477 9 12.5 9H12.75Z"
                        fill="#F2F2F2"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.25 1C11.25 0.585786 10.9142 0.25 10.5 0.25C10.0858 0.25 9.75002 0.585786 9.75002 1V2.48688C8.31091 2.50654 6.87239 2.58282 5.43779 2.71571L5.10619 2.74642C2.71449 2.96797 0.872803 4.95407 0.8321 7.35566L0.820008 8.06912C0.772704 10.8602 0.997685 13.6492 1.49176 16.3967C1.73672 17.7588 2.92206 18.75 4.30606 18.75H4.52711C5.76247 18.75 6.88178 18.022 7.38264 16.8927L8.44324 14.5014C9.23435 12.7177 11.7657 12.7177 12.5568 14.5014L13.6174 16.8927C14.1183 18.022 15.2376 18.75 16.4729 18.75H16.694C18.078 18.75 19.2633 17.7588 19.5083 16.3967C20.0023 13.6492 20.2273 10.8602 20.18 8.06912L20.1679 7.35566C20.1272 4.95406 18.2855 2.96797 15.8939 2.74643L15.5622 2.71571C14.1276 2.58282 12.6891 2.50654 11.25 2.48688V1ZM5.57614 4.20931C8.85171 3.9059 12.1483 3.9059 15.4239 4.20931L15.7555 4.24003C17.3854 4.39101 18.6404 5.74447 18.6681 7.38108L18.6802 8.09454C18.7259 10.7881 18.5088 13.4797 18.032 16.1312C17.9155 16.7788 17.352 17.25 16.694 17.25H16.4729C15.8308 17.25 15.2489 16.8716 14.9886 16.2846L13.928 13.8933C12.6095 10.9205 8.39058 10.9205 7.07206 13.8933L6.01146 16.2846C5.7511 16.8716 5.16927 17.25 4.52711 17.25H4.30606C3.64807 17.25 3.08454 16.7788 2.96808 16.1312C2.49126 13.4797 2.27414 10.7881 2.31979 8.09454L2.33188 7.38108C2.35962 5.74447 3.61467 4.39101 5.24454 4.24003L5.57614 4.20931Z"
                        fill="#F2F2F2"
                    />
                </svg>
            </router-link>
            <router-link to="/BookstoresView" class="navbar-brand">
                <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.75 7C4.75 4.92893 6.42893 3.25 8.5 3.25C10.5711 3.25 12.25 4.92893 12.25 7C12.25 9.07107 10.5711 10.75 8.5 10.75C6.42893 10.75 4.75 9.07107 4.75 7ZM8.5 4.75C7.25736 4.75 6.25 5.75736 6.25 7C6.25 8.24264 7.25736 9.25 8.5 9.25C9.74264 9.25 10.75 8.24264 10.75 7C10.75 5.75736 9.74264 4.75 8.5 4.75Z"
                        fill="white"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.95641 6.12724C2.23017 2.80603 5.00555 0.25 8.33803 0.25H8.66198C11.9945 0.25 14.7698 2.80603 15.0436 6.12724C15.1903 7.90751 14.6404 9.67525 13.5097 11.0581L9.91489 15.4545C9.18361 16.3488 7.81639 16.3488 7.08512 15.4545L3.49032 11.0581C2.35958 9.67525 1.80967 7.90751 1.95641 6.12724ZM8.33803 1.75C5.78621 1.75 3.66097 3.70726 3.45134 6.25046C3.33652 7.64343 3.7668 9.02659 4.65154 10.1086L8.24634 14.505C8.37745 14.6653 8.62256 14.6653 8.75367 14.505L12.3485 10.1086C13.2332 9.02659 13.6635 7.64343 13.5487 6.25046C13.339 3.70726 11.2138 1.75 8.66198 1.75H8.33803Z"
                        fill="white"
                    />
                    <path
                        d="M4.17082 14.3354C4.35606 13.9649 4.20589 13.5144 3.83541 13.3292C3.46493 13.1439 3.01442 13.2941 2.82918 13.6646L0.82918 17.6646C0.712935 17.8971 0.725358 18.1732 0.862013 18.3943C0.998668 18.6154 1.24007 18.75 1.5 18.75H15.5C15.7599 18.75 16.0013 18.6154 16.138 18.3943C16.2746 18.1732 16.2871 17.8971 16.1708 17.6646L14.1708 13.6646C13.9856 13.2941 13.5351 13.1439 13.1646 13.3292C12.7941 13.5144 12.6439 13.9649 12.8292 14.3354L14.2865 17.25H2.71353L4.17082 14.3354Z"
                        fill="white"
                    />
                </svg>
            </router-link>
        </div>
    </nav>

</template>

<script>
import DropUpBar from "./components/DropUpBar.vue";
import SearchBar from "./components/SearchBar.vue";

import AboutVue from "./components/AboutVue.vue";

export default {
components: {DropUpBar, SearchBar, AboutVue},
};
</script>

<style scoped>
.topbar,
.bottom-bar {
    background-color: #D98031;
    color: #ffffff;
}

.topbar {
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 0.5em;
    font-family: "Radley";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
}

.About {
    float: right;
}

.bottom-bar {
    border-radius: 20px 20px 0px 0px;
}
.padding-bottom {
    padding-bottom: 5rem;
}
.collapse {
        border-radius: 20px 20px 0px 0px;
      box-shadow: 0 0 0 99999px rgba(0, 0, 0, .5);
}
</style>



