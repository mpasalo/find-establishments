<template>
    <div id="app">
        <a-layout id="components-layout-demo-responsive">
            <a-layout-sider class="d-none d-md-block">
                <div class="logo" />
                <a-menu theme="dark" mode="inline" class="text-center">
                    <a-menu-item key="1">
                        <a-icon type="home" />
                        <span class="nav-text">Home</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header :style="{ background: '#fff', padding: 0 }" />
                <a-layout-content :style="{ margin: '24px 16px 0' }">
                    <div
                        id="test"
                        :style="{
                            padding: '24px',
                            background: '#fff',
                        }"
                    >
                        <Establishments />
                    </div>
                </a-layout-content>
                <a-layout-footer style="textAlign: center">
                    Establishments ©2020 Created by Marc
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
import Establishments from "./components/Establishments.vue";
import { Menu, Icon, Layout } from "ant-design-vue";

export default {
    name: "App",
    components: {
        Establishments,
        "a-menu": Menu,
        "a-menu-item": Menu.Item,
        "a-icon": Icon,
        "a-layout": Layout,
        "a-layout-sider": Layout.Sider,
        "a-layout-header": Layout.Header,
        "a-layout-content": Layout.Content,
        "a-layout-footer": Layout.Footer,
    },
};
</script>

<style>
#components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}

#components-layout-demo-responsive {
    min-height: 100vh;
}
</style>
