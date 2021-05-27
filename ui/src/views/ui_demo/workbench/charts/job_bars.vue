<template>
    <div id="job-bars"></div>
</template>

<script>
    import {Chart} from '@antv/g2'

    export default {
        name: 'job_bars',
        props: {
            barData: {
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
                    container: 'job-bars',
                    autoFit: true,
                    height: that.height
                });
                this.chart = chart
                const legend = this.barData.legend ? this.barData.legend : ''
                chart.data(this.barData.data);
                chart.scale(this.barData.metric, {
                    nice: true
                });

                chart.tooltip({
                    showMarkers: false
                });
                chart.legend(legend, {
                    itemHeight: 30
                })
                chart.interaction('active-region');
                chart.interval().position([this.barData.dimension, this.barData.metric]).color(legend);
                chart.render();
            }
        }
    }
</script>

<style scoped>

</style>
