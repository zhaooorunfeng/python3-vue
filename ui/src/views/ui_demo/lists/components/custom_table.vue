<template>
    <div id="customTable">
        <bk-table ref="table" :data="tableList" :pagination="pagination" ext-cls="custom-table" :max-height="690">
            <bk-table-column label="指标1" prop="name1" :show-overflow-tooltip="true">
                <template slot-scope="props">
                    <div style="padding: 10px 0 10px 0;">
                        <div style="color: #3A84FF;cursor: pointer;">{{props.row.name1}}</div>
                        <div style="margin-top: 5px;">{{props.row.name1}}</div>
                    </div>
                </template>
            </bk-table-column>
            <bk-table-column label="指标2" prop="name2"></bk-table-column>
            <bk-table-column label="指标3" prop="name3">
                <template slot-scope="props">
                    <span style="color: #3A84FF;">{{props.row.name3}}</span>
                </template>
            </bk-table-column>
            <bk-table-column label="指标4" prop="name4"></bk-table-column>
            <bk-table-column label="节点状态" prop="name5">
                <template slot-scope="props">
                    <div v-if="props.row.name5 === 'success'">
                        <div class="status-color" style="background-color: #2DCB56;"></div>
                        <span>成功</span>
                    </div>
                    <div v-else-if="props.row.name5 === 'fail'">
                        <div class="status-color" style="background-color: #EA3636;"></div>
                        <span>失败</span>
                    </div>
                    <div v-else-if="props.row.name5 === 'run'">
                        <span>执行中</span>
                    </div>
                    <div v-else-if="props.row.name5 === 'wait'">
                        <span>等待</span>
                    </div>
                    <div v-else-if="props.row.name5 === 'pause'">
                        <div class="status-color" style="background-color: #C4C6CC;"></div>
                        <span>暂停</span>
                    </div>
                    <div v-else-if="props.row.name5 === 'stop'">
                        <div class="status-color" style="background-color: #FFD695;"></div>
                        <span>终止</span>
                    </div>
                    <div v-else-if="props.row.name5 === 'error'">
                        <div class="status-color" style="background-color: #FF8000;"></div>
                        <span>错误</span>
                    </div>
                </template>
            </bk-table-column>
            <bk-table-column label="指标4" prop="name6" :show-overflow-tooltip="true"></bk-table-column>
            <bk-table-column label="操作" width="150">
                <template slot-scope="props">
                    <bk-button class="mr10" theme="primary" text style="margin-top: 10px;">编辑</bk-button>
                    <bk-button class="mr10" theme="primary" text>操作</bk-button>
                    <div style="display: inline-block;position: relative;">
                        <bk-popover ext-cls="dot-menu" placement="bottom-start" theme="dot-menu light" trigger="click"
                            :arrow="false" :distance="0" offset="15">
                            <span class="dot-menu-trigger"></span>
                            <ul class="dot-menu-list" slot="content">
                                <li class="dot-menu-item">测试</li>
                            </ul>
                        </bk-popover>
                    </div>
                </template>
            </bk-table-column>
        </bk-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableList: [],
                pagination: {
                    current: 1,
                    count: 1,
                    limit: 20
                },
            }
        },
        created() {
            this.$api.Test.get_custom_list().then(res => {
                this.tableList = res.data.list
                this.pagination.count = res.data.count
            })
        }
    }
</script>

<style lang="scss">
    .dot-menu {
        display: inline-block;
        vertical-align: middle;

        .tippy-tooltip.dot-menu-theme {
            padding: 0;
        }
    }

    .dot-menu-list {
        margin: 0;
        padding: 5px 0;
        min-width: 50px;
        list-style: none;
    }

    .dot-menu-list .dot-menu-item {
        padding: 0 10px;
        font-size: 12px;
        line-height: 26px;
        cursor: pointer;

        &:hover {
            background-color: #eaf3ff;
            color: #3a84ff;
        }
    }
</style>
<style lang="scss" scoped>
    #customTable {
        .custom-table {
            /deep/ .bk-table-pagination-wrapper {
                background-color: #fff;
            }

            /deep/ .is-first {
                .cell {
                    -webkit-line-clamp: 2;
                }
            }

            .status-color {
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                margin-right: 10px;

                /deep/ .custom-loading {
                    /deep/ .bk-loading2 .rotate,
                    .bk-spin-loading .rotate {
                        width: 1px !important;
                        height: 2px !important;
                        top: 90% !important;
                        right: 50% !important;
                    }
                }
            }

            .dot-menu-trigger {
                position: relative;
                bottom: 2px;
                display: block;
                width: 30px;
                height: 30px;
                line-height: 30px;
                border-radius: 50%;
                text-align: center;
                font-size: 0;
                cursor: pointer;
            }

            .dot-menu-trigger:hover {
                color: #3A84FF;
                background-color: #DCDEE5;
            }

            .dot-menu-trigger:before {
                content: "";
                display: inline-block;
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background-color: currentColor;
                box-shadow: 0 -4px 0 currentColor, 0 4px 0 currentColor;
            }
        }
    }
</style>
