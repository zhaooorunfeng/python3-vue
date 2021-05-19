<template>
    <div id="home_first">
        <bk-container :col="8" :gutter="16" ext-cls="home_container">
            <bk-row>
                <bk-col :span="0">
                    <Card
                        style="padding: 0 0"
                        :show-border="false"
                        :background-color="'inherit'"
                        :show-header="false">
                        <template slot="content">
                            <stats-card :card-list="cardList"></stats-card>
                        </template>
                    </Card>
                </bk-col>
            </bk-row>
            <bk-row>
                <bk-col :span="3">
                    <Card :title="'作业情况TOP5'">
                        <template slot="content">
                            <job-bar :bar-data="barData" v-bind="$attrs"></job-bar>
                        </template>
                    </Card>
                </bk-col>
                <bk-col :span="5">
                    <Card :title="'作业趋势图'">
                        <template slot="header">
                            <div class="bk-button-group">
                                <bk-button
                                    @click="btnGroupSelected = 'year'"
                                    :class="btnGroupSelected === 'year' ? 'is-selected' : ''">
                                    近1年
                                </bk-button>
                                <bk-button
                                    @click="btnGroupSelected = 'day'"
                                    :class="btnGroupSelected === 'day' ? 'is-selected' : ''">
                                    近30天
                                </bk-button>
                            </div>
                        </template>
                        <template slot="content">
                            <job-line :line-data="lineData" v-bind="$attrs" style="margin-top: -12px"></job-line>
                        </template>
                    </Card>
                </bk-col>
            </bk-row>
            <bk-row>
                <bk-col :span="4">
                    <Card :title="'作业管理状态'">
                        <template slot="header">
                            <bk-button
                                :text="true"
                                title="primary"
                                ext-cls="font-btn"
                                @click="handleMoreInfo">查看更多
                            </bk-button>
                        </template>
                        <template slot="content">
                            <flow :step-list="stepList" :cur-step="4" style="height: 254px"></flow>
                        </template>
                    </Card>
                </bk-col>
                <bk-col :span="4">
                    <Card :title="'作业数据近5条'">
                        <template slot="header">
                            <bk-button
                                :text="true"
                                title="primary"
                                ext-cls="font-btn"
                                @click="handleMoreInfo">查看更多
                            </bk-button>
                        </template>
                        <template slot="content">
                            <bk-table :data="tableData">
                                <bk-table-column
                                    v-for="field in tableTitle"
                                    :key="field.id"
                                    :label="field.label"
                                    :prop="field.id">
                                </bk-table-column>
                            </bk-table>
                        </template>
                    </Card>
                </bk-col>
            </bk-row>
        </bk-container>
    </div>
</template>

<script>
    import Card from '@/components/base/card'
    import StatsCard from '@/components/custom/stats_cards'
    import Flow from '@/components/custom/flow'
    import JobBar from './charts/job_bars'
    import JobLine from './charts/job_lines'

    export default {
        name: 'home_first',
        components: {
            Card,
            StatsCard,
            Flow,
            JobBar,
            JobLine
        },
        data() {
            return {
                btnGroupSelected: 'year',
                tableTitle: [
                    {
                        id: 'ip',
                        label: '名称/内网IP',
                        disabled: true
                    },
                    {
                        id: 'source',
                        label: '来源'
                    },
                    {
                        id: 'status',
                        label: '状态'
                    },
                    {
                        id: 'create_time',
                        label: '创建时间'
                    }],
                tableData: [
                    {
                        ip: '192.168.0.1',
                        source: 'QQ',
                        status: '创建中',
                        create_time: '2018-05-25 15:02:24',
                    },
                    {
                        ip: '192.168.0.1',
                        source: 'QQ',
                        status: '创建中',
                        create_time: '2018-05-25 15:02:24',
                    },
                    {
                        ip: '192.168.0.2',
                        source: '微信',
                        status: '正常',
                        create_time: '2018-05-25 15:02:24'
                    },
                    {
                        ip: '192.168.0.3',
                        source: 'QQ',
                        status: '创建中',
                        create_time: '2018-05-25 15:02:24'
                    },
                    {
                        ip: '192.168.0.4',
                        source: '短信',
                        status: '创建中',
                        create_time: '2018-05-25 15:02:24'
                    }
                ],
                cardList: [
                    {
                        'num': 2014,
                        'name': '作业名称',
                        'icon': 'iconfont icon-mianxingtubiao-zuoyelishi',
                        'info': '作业名称解释，tooltips位置视情况调试',
                        'color': 'rgba(58, 132, 255, 0.8)',
                        'background': 'rgba(58, 132, 255, 0.3)'
                    },
                    {
                        'num': 2046,
                        'name': '业务名称',
                        'icon': 'iconfont icon-mianxingtubiao-zuoyejiankongdaping',
                        'info': '',
                        'color': 'rgba(255, 156, 1, 0.8)',
                        'background': 'rgba(255, 156, 1, 0.3)'
                    },
                    {
                        'num': 1024,
                        'name': '实例名称',
                        'icon': 'iconfont icon-mianxingtubiao-yingyongqiang',
                        'info': '',
                        'color': 'rgba(45, 203, 86, 0.8)',
                        'background': 'rgba(45, 203, 86, 0.3)'
                    },
                    {
                        'num': 4068,
                        'name': '模型名称',
                        'icon': 'iconfont icon-mianxingtubiao-zixitong',
                        'info': '',
                        'color': 'rgba(90, 68, 210, 0.8)',
                        'background': 'rgba(90, 68, 210, 0.3)'
                    }
                ],
                barData: {
                    data: [
                        {name: '指标1', value: 588},
                        {name: '指标2', value: 520},
                        {name: '指标3', value: 461},
                        {name: '指标4', value: 175},
                        {name: '指标5', value: 88},
                    ],
                    dimension: 'name',
                    metric: 'value'
                },
                lineData: {
                    data: [
                        {date: 'Jan', name: '指标一', value: 550},
                        {date: 'Jan', name: '指标二', value: 560},
                        {date: 'Feb', name: '指标一', value: 240},
                        {date: 'Feb', name: '指标二', value: 740},
                        {date: 'Mar', name: '指标一', value: 50},
                        {date: 'Mar', name: '指标二', value: 760},
                        {date: 'Apr', name: '指标一', value: 500},
                        {date: 'Apr', name: '指标二', value: 900},
                        {date: 'May', name: '指标一', value: 690},
                        {date: 'May', name: '指标二', value: 180}
                    ],
                    dimension: 'date',
                    metric: 'value',
                    legend: 'name',
                    type: 'line'
                },
                stepList: [
                    {title: '吴昊（总经理）审批通过，并附“同意”', description: '2019-12-12 11:23'},
                    {title: '王坤（组长）审批通过，并附“同意”', description: '2019-12-12 11:23'},
                    {title: '李想（总监）审批通过，并附“同意”', description: '2019-12-12 11:23'},
                    {title: '张晓丽（管理员）审批通过，并附“同意”', description: '2019-12-12 11:23'}
                ]
            }
        },
        methods: {
            handleMoreInfo() {
                console.log('查看更多')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home_container {
        padding: 0 0 !important;

        .bk-grid-row + .bk-grid-row {
            margin-top: 16px;
        }

        .font-btn {
            font-size: 12px;
        }
    }

</style>
