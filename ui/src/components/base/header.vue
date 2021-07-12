<template>
    <div class="monitor-navigation-header">
        <div class="header-title">
            {{$route.meta.title}}
        </div>
        <bk-select class="header-select is-left"
            v-model="header.bizId" :clearable="false" searchable>
            <bk-option v-for="option in header.selectList"
                :key="option.id"
                :id="option.id"
                :name="option.name">
            </bk-option>
        </bk-select>
        <div class="header-mind is-left">
            <i class="iconfont icon-mianxingtubiao-tongzhi" title="通知"></i>
        </div>
        <div class="header-help is-left">
            <i class="iconfont icon-mianxingtubiao-wenti" title="帮助"></i>
        </div>
        <div class="header-user is-left">
            {{user.name}}
            <i class="iconfont icon-arrLeft-fill-copy-copy"></i>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'nav-header',
        props: {
            nav: {
                type: Object,
                default: () => ({})
            },
            header: {
                type: Object,
                default: () => ({})
            },
            user: {
                type: Object,
                default: () => ({})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .monitor-navigation-header {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 14px;

        .header-nav {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            padding: 0;
            margin: 0;
        }

        .header-nav-item {
            list-style: none;
            height: 50px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin-right: 40px;
            color: #96A2B9;
            min-width: 56px
        }

        .header-nav-item.item-active {
            color: #FFFFFF !important;
        }

        .header-nav-item:hover {
            cursor: pointer;
            color: #D3D9E4;
        }

        .header-title {
            color: #63656E;
            font-size: 16px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin-left: -6px;
        }

        .header-select {
            width: 240px;
            margin-left: auto;
            margin-right: 34px;
            border: none;
            background: #252F43;
            color: #D3D9E4;
            -webkit-box-shadow: none;
            box-shadow: none
        }

        .header-select.is-left {
            background: #F0F1F5;
            color: #63656E;
        }

        .header-mind {
            color: #768197;
            font-size: 16px;
            position: relative;
            height: 32px;
            width: 32px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin-right: 8px
        }

        .header-mind.is-left {
            color: #63656E;
        }

        .header-mind.is-left:hover {
            color: #3A84FF;
            background: #F0F1F5
        }

        .header-mind:hover {
            background: -webkit-gradient(linear, right top, left top, from(rgba(37, 48, 71, 1)), to(rgba(38, 50, 71, 1)));
            background: linear-gradient(270deg, rgba(37, 48, 71, 1) 0%, rgba(38, 50, 71, 1) 100%);
            border-radius: 100%;
            cursor: pointer;
            color: #D3D9E4;
        }

        .header-help {
            color: #768197;
            font-size: 16px;
            position: relative;
            height: 32px;
            width: 32px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin-right: 8px
        }

        .header-help.is-left {
            color: #63656E;
        }

        .header-help.is-left:hover {
            color: #3A84FF;
            background: #F0F1F5
        }

        .header-help:hover {
            background: -webkit-gradient(linear, right top, left top, from(rgba(37, 48, 71, 1)), to(rgba(38, 50, 71, 1)));
            background: linear-gradient(270deg, rgba(37, 48, 71, 1) 0%, rgba(38, 50, 71, 1) 100%);
            border-radius: 100%;
            cursor: pointer;
            color: #D3D9E4;
        }

        .header-user {
            height: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            color: #96A2B9;
            margin-left: 8px;
        }

        .header-user .iconfont {
            margin-left: 5px;
            font-size: 12px;
        }

        .header-user.is-left {
            color: #63656E;
        }

        .header-user.is-left:hover {
            color: #3A84FF
        }

        .header-user:hover {
            cursor: pointer;
            color: #D3D9E4;
        }
    }
</style>
