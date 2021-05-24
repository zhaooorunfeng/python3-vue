<template>
    <div id="job-lines"></div>
</template>

<script>
    import {Chart} from '@antv/g2'

    export default {
        name: 'job_lines',
        props: {
            lineData: {
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
            },
            lineData: {
                handler(val, old) {
                    if (this.chart) {
                        this.chart.destroy()
                        this.initChart()
                    }
                },
                immediate: true,
                deep: true
            }
        },
        methods: {
            initChart() {
                const chart = new Chart({
                    container: 'job-lines',
                    autoFit: true,
                    height: 240
                });
                this.chart = chart
                chart.data(this.lineData.data);
                chart.scale(this.lineData.dimension, {
                    range: [0.02, 0.98],
                })
                chart.scale(this.lineData.metric, {
                    nice: true
                })

                chart.legend({
                    position: 'top-left',
                });

                chart.tooltip({
                    showCrosshairs: true,
                    shared: true,
                });
                chart
                    .line()
                    .position([this.lineData.dimension, this.lineData.metric])
                    .color(this.lineData.legend);

                if (this.lineData.type === 'area') {
                    chart
                        .area()
                        .position([this.lineData.dimension, this.lineData.metric])
                        .color(this.lineData.legend);
                }

                chart
                    .point()
                    .position([this.lineData.dimension, this.lineData.metric])
                    .color(this.lineData.legend)
                    .shape('circle');

                chart.render();
            }
        }
    }
</script>

<style scoped>

</style>
