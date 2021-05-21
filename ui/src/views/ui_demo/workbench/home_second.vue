<template>
    <div id="home-second">
        <bk-container :col="8" :gutter="16" ext-cls="home-container">
            <bk-row>
                <bk-col :span="0">
                    <Card :show-header="false">
                        <template slot="content">
                            <display-card :card-list="cardList" :height="66"></display-card>
                        </template>
                    </Card>
                </bk-col>
            </bk-row>
            <bk-row>
                <bk-col :span="3">
                    <Card :title="'作业TOP10'">
                        <template slot="content">
                            <job-bar :bar-data="barData" :height="250" v-bind="$attrs"></job-bar>
                        </template>
                    </Card>
                </bk-col>
                <bk-col :span="5">
                    <Card :title="'作业动态分布'">
                        <template slot="content">
                            <job-pie :pie-data="pieData" :height="250" v-bind="$attrs"></job-pie>
                        </template>
                    </Card>
                </bk-col>
            </bk-row>
            <bk-row>
                <bk-col :span="0">
                    <Card :title="'作业执行趋势'">
                        <template slot="header">
                            <div class="bk-button-group">
                                <bk-button
                                    @click="btnDays = '7'"
                                    :class="btnDays === '7' ? 'is-selected' : ''">
                                    近7天
                                </bk-button>
                                <bk-button
                                    @click="btnDays = '15'"
                                    :class="btnDays === '15' ? 'is-selected' : ''">
                                    近15天
                                </bk-button>
                                <bk-button
                                    @click="btnDays = '30'"
                                    :class="btnDays === '30' ? 'is-selected' : ''">
                                    近30天
                                </bk-button>
                            </div>
                        </template>
                        <template slot="content">
                            <job-tend :tend-data="tendData" :height="270" v-bind="$attrs"></job-tend>
                        </template>
                    </Card>
                </bk-col>
            </bk-row>
        </bk-container>
    </div>
</template>

<script>
    import Card from '@/components/base/card'
    import DisplayCard from '@/components/custom/display_card'
    import JobBar from './charts/job_bars'
    import JobPie from './charts/job_pie'
    import JobTend from './charts/job_tend'

    export default {
        name: 'home_second',
        components: {
            Card,
            DisplayCard,
            JobBar,
            JobPie,
            JobTend
        },
        data() {
            return {
                btnDays: '15',
                cardList: [
                    {
                        'num': 2014,
                        'name': '作业名称',
                        'icon': 'iconfont icon-mianxingtubiao-zuoyejiankongdaping',
                        'info': '作业名称解释，tooltips位置视情况调试',
                        'color': 'rgba(58, 132, 255, 0.8)',
                        'background': 'rgba(58, 132, 255, 0.3)'
                    },
                    {
                        'num': 2046,
                        'name': '业务名称',
                        'icon': 'iconfont icon-mianxingtubiao-zuoyejiankongdaping',
                        'info': '',
                        'color': 'rgba(58, 132, 255, 0.8)',
                        'background': 'rgba(58, 132, 255, 0.3)'
                    },
                    {
                        'num': 1024,
                        'name': '实例名称',
                        'icon': 'iconfont icon-mianxingtubiao-zuoyejiankongdaping',
                        'info': '试',
                        'color': 'rgba(58, 132, 255, 0.8)',
                        'background': 'rgba(58, 132, 255, 0.3)'
                    },
                    {
                        'num': 4068,
                        'name': '模型名称',
                        'icon': 'iconfont icon-mianxingtubiao-zuoyejiankongdaping',
                        'info': '',
                        'color': 'rgba(58, 132, 255, 0.8)',
                        'background': 'rgba(58, 132, 255, 0.3)'
                    }
                ],
                barData: {
                    data: [
                        {name: '指标1', value: 588},
                        {name: '指标2', value: 570},
                        {name: '指标3', value: 500},
                        {name: '指标4', value: 400},
                        {name: '指标5', value: 400},
                        {name: '指标6', value: 290},
                        {name: '指标7', value: 180},
                        {name: '指标8', value: 165},
                        {name: '指标9', value: 150},
                        {name: '指标10', value: 88},
                    ],
                    dimension: 'name',
                    metric: 'value'
                },
                pieData: {
                    data: [
                        {name: '正常', value: 72},
                        {name: '异常', value: 28}
                    ],
                    dimension: 'name',
                    metric: 'value'
                },
                // tendData: {
                //     data: [
                //         {name: '作业一', month: 'Jan.', value: 1300},
                //         {name: '作业一', month: 'Feb.', value: 200},
                //         {name: '作业一', month: 'Mar.', value: 600},
                //         {name: '作业一', month: 'Apr.', value: 500},
                //         {name: '作业一', month: 'May', value: 400},
                //         {name: '作业一', month: 'Jun.', value: 600},
                //         {name: '作业一', month: 'Jul.', value: 500},
                //         {name: '作业一', month: 'Aug', value: 400},
                //         {name: '作业二', month: 'Jan.', value: 800},
                //         {name: '作业二', month: 'Feb.', value: 600},
                //         {name: '作业二', month: 'Mar.', value: 1100},
                //         {name: '作业二', month: 'Apr.', value: 300},
                //         {name: '作业二', month: 'May', value: 1000},
                //         {name: '作业二', month: 'Jun.', value: 1100},
                //         {name: '作业二', month: 'Jul.', value: 300},
                //         {name: '作业二', month: 'Aug', value: 1000},
                //         {name: '作业三', month: 'Jan.', value: 1400},
                //         {name: '作业三', month: 'Feb.', value: 100},
                //         {name: '作业三', month: 'Mar.', value: 300},
                //         {name: '作业三', month: 'Apr.', value: 600},
                //         {name: '作业三', month: 'May', value: 700},
                //         {name: '作业三', month: 'Jun.', value: 300},
                //         {name: '作业三', month: 'Jul.', value: 600},
                //         {name: '作业三', month: 'Aug', value: 700},
                //         //
                //         {limit: '300', month: 'Jan.'},
                //         {limit: '400', month: 'Feb.'},
                //         {limit: '400', month: 'Mar.'},
                //         {limit: '400', month: 'Apr.'},
                //         {limit: '400', month: 'May'},
                //         {limit: '400', month: 'Jun.'},
                //         {limit: '500', month: 'Jul.'},
                //         {limit: '600', month: 'Aug'}
                //     ],
                //     dimension: 'month',
                //     metric: 'value',
                //     legend: 'name',
                //     line: 'limit'
                // }
                tendData: {
                    data: [
                        {name: '作业一', month: 'Jan.', value: 1300},
                        {name: '作业一', month: 'Feb.', value: 200},
                        {name: '作业一', month: 'Mar.', value: 600},
                        {name: '作业一', month: 'Apr.', value: 500},
                        {name: '作业一', month: 'May', value: 400},
                        {name: '作业一', month: 'Jun.', value: 600},
                        {name: '作业一', month: 'Jul.', value: 500},
                        {name: '作业一', month: 'Aug', value: 400},
                        {name: '作业二', month: 'Jan.', value: 800},
                        {name: '作业二', month: 'Feb.', value: 600},
                        {name: '作业二', month: 'Mar.', value: 1100},
                        {name: '作业二', month: 'Apr.', value: 300},
                        {name: '作业二', month: 'May', value: 1000},
                        {name: '作业二', month: 'Jun.', value: 1100},
                        {name: '作业二', month: 'Jul.', value: 300},
                        {name: '作业二', month: 'Aug', value: 1000},
                        {name: '作业三', month: 'Jan.', value: 1400},
                        {name: '作业三', month: 'Feb.', value: 100},
                        {name: '作业三', month: 'Mar.', value: 300},
                        {name: '作业三', month: 'Apr.', value: 600},
                        {name: '作业三', month: 'May', value: 700},
                        {name: '作业三', month: 'Jun.', value: 300},
                        {name: '作业三', month: 'Jul.', value: 600},
                        {name: '作业三', month: 'Aug', value: 700},
                        //
                        {limit: '300', month: 'Jan.'},
                        {limit: '400', month: 'Feb.'},
                        {limit: '400', month: 'Mar.'},
                        {limit: '400', month: 'Apr.'},
                        {limit: '400', month: 'May'},
                        {limit: '400', month: 'Jun.'},
                        {limit: '500', month: 'Jul.'},
                        {limit: '600', month: 'Aug'}
                    ],
                    dimension: 'month',
                    metric: 'value',
                    legend: 'name',
                    line: 'limit'
                }
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
    .home-container {
        padding: 0 0 !important;

        .bk-grid-row + .bk-grid-row {
            margin-top: 16px;
        }

        .font-btn {
            font-size: 12px;
        }
    }

</style>
