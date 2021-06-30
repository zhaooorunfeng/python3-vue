<template>
    <div class="default-form">
        <div class="header">
            <cw-alert type="info" :content="`操作提示信息显示,可手动关闭, 打开默认显示提示信息。`"></cw-alert>
        </div>
        <div class="content">
            <long-form></long-form>
        </div>
    </div>
</template>

<script>
    import cwAlert from '@/components/custom/cw_alert.vue'
    import longForm from './components/long_form.vue'
    export default {
        name: 'default_form',
        components: {
            cwAlert,
            longForm
        },
    }
</script>

<style lang="scss" scoped>
    .default-form {
        padding-top: 20px;
        position: relative;
        .header {
            padding: 0 24px 0 24px;
        }
        .content {
            margin-top: 20px;
            // padding: 0 24px 0 24px;
        }
    }
</style>
