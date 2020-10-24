<template>
    <div class="text-center">
        <div class="m-4">
            <a-dropdown>
                <a-menu slot="overlay">
                    <a-menu-item key="1" @click="chooseEstablishment('malls')">
                        <a-icon type="environment" />Malls
                    </a-menu-item>
                    <a-menu-item
                        key="2"
                        @click="chooseEstablishment('restaurants')"
                    >
                        <a-icon type="environment" />Restaurants
                    </a-menu-item>
                    <a-menu-item key="3" @click="chooseEstablishment('banks')">
                        <a-icon type="environment" />Banks
                    </a-menu-item>
                </a-menu>
                <a-button type="primary">
                    Choose an establishment <a-icon type="down" />
                </a-button>
            </a-dropdown>
        </div>
        <div class="m-4">
            <iframe
                width="100%"
                height="500"
                frameborder="0"
                style="border:0"
                :src="
                    `https://www.google.com/maps/embed/v1/search?key=${this.apiKey}&q=${this.$store.state.selectedPlace}+near+me`
                "
                allowfullscreen
            >
            </iframe>
        </div>
    </div>
</template>

<script>
import { Menu, Icon, Dropdown, Button } from "ant-design-vue";
import "ant-design-vue/dist/antd.min.css";
export default {
    name: "Places",
    components: {
        "a-dropdown": Dropdown,
        "a-button": Button,
        "a-menu": Menu,
        "a-menu-item": Menu.Item,
        "a-icon": Icon,
    },
    data() {
        return {
            apiKey: process.env.VUE_APP_API_KEY,
        };
    },
    methods: {
        chooseEstablishment: function(place) {
            this.$store.commit("changePlace", place);
        },
    },
};
</script>
