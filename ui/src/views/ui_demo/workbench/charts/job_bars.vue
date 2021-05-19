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
                const chart = new Chart({
                    container: 'job-bars',
                    autoFit: true,
                    height: 240,
                });
                this.chart = chart
                chart.data(this.barData.data);
                chart.scale(this.barData.metric, {
                    nice: true
                });

                chart.tooltip({
                    showMarkers: false
                });
                chart.interaction('active-region');
                chart.interval().position([this.barData.dimension, this.barData.metric]);
                chart.render();
            }
        }
    }
</script>

<style scoped>

</style>
