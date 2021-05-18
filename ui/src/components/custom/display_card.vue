<template>
    <div class="stats-card" :style="{height: `${height}px`}">
        <div class="card-body" v-for="(card,index) in cards" :key="index">
            <div class="card-icon">
                <div class="card-icon-background" :style="{ background: card.background }">
                    <i :class="card.icon" :style="{ color: card.color }"></i>
                </div>
            </div>
            <div class="card-text">
                <div class="card-text-num" :title="card.num">{{ card.num }}</div>
                <div class="card-text-name">
                    <div class="card-name" :title="card.name">{{ card.name }}</div>
                    <span v-if="card.info.length > 0 && displayInfo" style="margin-left: 9px">
                        <bk-popover :content="card.info" placement="bottom-start">
                            <i class="iconfont icon-xianxingtubiao-tishi"></i>
                        </bk-popover>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'display_card',
        props: {
            // card
            displayInfo: {
                type: Boolean,
                default: true
            },
            height: {
                type: Number,
                default: 66
            },
            // data
            cardList: {
                type: Array,
                default: () => ([])
            }
        },
        data () {
            return {
                cards: []
            }
        },
        watch: {
            cardList: {
                handler (val) {
                    this.cards = val
                },
                immediate: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .stats-card {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .card-body {
        flex-grow: 1;
        display: flex;
        height: 100%;
        background: #ffffff;
        flex-direction: row;
        align-items: center;
        padding: 3px 24px;
        border-left: 1px solid #DCDEE5;
    }

    .card-body:nth-child(1) {
        border-left: none;
    }


    .card-text {
        height: 100%;
        margin-left: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .card-text-num {
        max-width: 130px;
        font-size: 24px;
        font-weight: bold;
        color: #63656E;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .card-text-name {
        font-size: 12px;
        font-weight: 400;
        color: #979BA5;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .card-name {
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .card-icon {
        width: 60px;
        height: 60px;
        text-align: center;
        font-size: 30px;

        .iconfont {
            font-size: inherit;
        }
    }

    .card-icon-background {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 50%;
    }

</style>
