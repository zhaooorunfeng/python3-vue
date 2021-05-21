<template>
    <div id="job-tend"></div>
</template>

<script>
    import {Chart} from '@antv/g2'

    export default {
        name: 'job_tend',
        props: {
            tendData: {
                type: Object,
                default: () => ({})
            },
            height: {
                type: Number,
                default: 240
            },
            navToggle: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                chart: null
            }
        },
        mounted() {
            this.initChart()
            // this.initEcharts()
        },
        watch: {
            navToggle: {
                handler(val, old) {
                    if (this.chart) {
                        setTimeout(() => {
                            this.chart.forceFit()
                        }, 200);
                    }
                },
                immediate: true
            }
        },
        methods: {
            initChart() {
                const that = this
                const chart = new Chart({
                    container: 'job-tend',
                    autoFit: true,
                    height: that.height
                });
                this.chart = chart
                chart.data(this.tendData.data);
                chart.scale(this.tendData.metric, {
                    nice: true,
                    sync: true,
                    min: 0
                })
                chart.scale(this.tendData.line, {
                    nice: true,
                    sync: this.tendData.metric,
                    min: 0
                })
                chart.axis(this.tendData.line, false)
                chart.tooltip({
                    shared: true,
                });
                chart.interval()
                    .position([this.tendData.dimension, this.tendData.metric])
                    .color(this.tendData.legend)
                    .adjust('stack')
                chart.line()
                    .position([this.tendData.dimension, this.tendData.line])
                    .color('#FFDCA5')
                chart.point()
                    .position([this.tendData.dimension, this.tendData.line])
                    .color('#FFDCA5')
                    .size(3)
                    .shape('circle');

                chart.interaction('active-region');
                // chart.removeInteraction('legend-filter'); // 自定义图例，移除默认的分类图例筛选交互
                chart.render();
            }
        }
    }
</script>

<style scoped>

</style>
