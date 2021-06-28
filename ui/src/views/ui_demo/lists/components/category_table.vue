<template>
    <div class="category-table">
        <bk-tab :active.sync="tabActive" ext-cls="custom-tab" :label-height="42">
            <bk-tab-panel v-for="(panel, index) in panels" v-bind="panel" :key="index">
                <bk-table ref="table" :data="tableList" :pagination="pagination" ext-cls="customTable" :size="setting.size"
                    :max-height="690" :outer-border="false">
                    <bk-table-column :label="item.label" :prop="item.id" v-for="(item, index) in setting.selectedFields"
                        :key="index" :show-overflow-tooltip="item.overflowTooltip" :width="item.hasOwnProperty('width') ? item.width : ''">
                        <template slot-scope="props">
                            <div v-if="item.id === 'name5'">
                                <div v-if="props.row.name5 === 'success'" style="display: flex;align-items: center;">
                                    <div class="status-color" style="background-color: #2DCB56;"></div>
                                    <div>成功</div>
                                </div>
                                <div v-else-if="props.row.name5 === 'info'" style="display: flex;align-items: center;">
                                    <div class="status-color" style="background-color: #FFD000;"></div>
                                    <div>提醒</div>
                                </div>
                                <div v-else-if="props.row.name5 === 'error'" style="display: flex;align-items: center;">
                                    <div class="status-color" style="background-color: #EA3636;"></div>
                                    <div>致命</div>
                                </div>
                                <div v-else-if="props.row.name5 === 'warning'" style="display: flex;align-items: center;">
                                    <div class="status-color" style="background-color: #FF8000;"></div>
                                    <div>预警</div>
                                </div>
                            </div>
                            <span v-else>{{props.row[item.id]}}</span>
                        </template>
                    </bk-table-column>
                    <bk-table-column type="setting">
                        <bk-table-setting-content :fields="setting.fields" :selected="setting.selectedFields"
                            @setting-change="handleSettingChange" :size="setting.size">
                        </bk-table-setting-content>
                    </bk-table-column>
                </bk-table>
            </bk-tab-panel>
        </bk-tab>
    </div>
</template>

<script>
    export default {
        data() {
            const fields = [{
                id: 'name1',
                label: '指标1',
                overflowTooltip: true,
                width: '300px'
            }, {
                id: 'name2',
                label: '指标2',
                overflowTooltip: true,
                width: ''
            }, {
                id: 'name3',
                label: '指标3',
                overflowTooltip: false,
                width: '100px'
            }, {
                id: 'name4',
                label: '指标4',
                overflowTooltip: true,
            }, {
                id: 'name5',
                label: '任务状态',
                overflowTooltip: false,
            }, {
                id: 'name6',
                label: '指标4',
                overflowTooltip: true,
            }, {
                id: 'name7',
                label: '指标4',
                overflowTooltip: true,
                width: '150px'
            }]
            return {
                tableList: [],
                setting: {
                    size: 'small', //表格大小
                    fields: fields, //表格所有列
                    selectedFields: fields.slice(0, 8), //表格当前显示列
                },
                tabActive: 0,
                pagination: {
                    current: 1,
                    count: 1,
                    limit: 20
                },
                panels: [{
                        name: 0,
                        label: '全部',
                    },
                    {
                        name: 1,
                        label: '任务一',
                    },
                    {
                        name: 2,
                        label: '任务二',
                    },
                    {
                        name: 3,
                        label: '任务三',
                    }
                ],
            }
        },
        methods: {
            //处理表格字段显隐
            handleSettingChange({
                fields,
                size
            }) {
                this.setting.size = size
                this.setting.selectedFields = fields
            },
        },
        created() {
            this.$api.Test.get_category_list().then(res => {
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
    .category-table {
        .custom-tab {
            /deep/ .bk-tab-section {
                padding: 20px 0 0 0;
                background-color: #fff;
            }
        }

        .customTable {
            /deep/ .bk-table-pagination-wrapper {
                background-color: #fff;
            }

            /deep/ .bk-table-empty-block {
                background-color: #fff;
            }

            .status-color {
                width: 4px;
                height: 14px;
                border-radius: 2px;
                display: inline-block;
                margin-right: 10px;
            }

            .dot-menu-trigger {
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
