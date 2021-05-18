<template>
    <div id="main-container">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'main-container'
    }
</script>

<style lang="scss" scoped>
    #main-container {
        min-height: calc(100vh - 92px);
        margin-bottom: 20px;
        /*内容容器样式*/
        /*background: #FFFFFF;*/
        /*-webkit-box-shadow: 0px 2px 4px 0px rgba(25, 25, 41, 0.05);*/
        /*box-shadow: 0px 2px 4px 0px rgba(25, 25, 41, 0.05);*/
        /*border-radius: 2px;*/
        /*border: 1px solid rgba(220, 222, 229, 1);*/
    }
</style>
