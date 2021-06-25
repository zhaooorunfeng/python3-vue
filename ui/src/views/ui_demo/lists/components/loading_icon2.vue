<template>
    <div class="juhua-loading">
        <div class="jh-circle1 jh-circle-ios"></div>
        <div class="jh-circle2 jh-circle-ios"></div>
        <div class="jh-circle3 jh-circle-ios"></div>
        <div class="jh-circle4 jh-circle-ios"></div>
        <div class="jh-circle5 jh-circle-ios"></div>
        <div class="jh-circle6 jh-circle-ios"></div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .juhua-loading {
        position: relative;
        width: 12px;
        height: 12px;
        -webkit-animation: circle-line-spin 1.5s linear infinite;
        animation: circle-line-spin 1.5s linear infinite;
    }

    .juhua-loading .jh-circle-ios {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .juhua-loading .jh-circle-ios:before {
        content: '';
        display: block;
        margin: 5% auto;
        width: 10%;
        height: 10%;
        background-color: #979BA5;
    }
    .juhua-loading .jh-circle1 {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    .juhua-loading .jh-circle2 {
        -webkit-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
        transform: rotate(60deg);
    }

    .juhua-loading .jh-circle3 {
        -webkit-transform: rotate(120deg);
        -ms-transform: rotate(120deg);
        transform: rotate(120deg);
    }

    .juhua-loading .jh-circle4 {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
    }

    .juhua-loading .jh-circle5 {
        -webkit-transform: rotate(240deg);
        -ms-transform: rotate(240deg);
        transform: rotate(240deg);
    }

    .juhua-loading .jh-circle6 {
        -webkit-transform: rotate(300deg);
        -ms-transform: rotate(300deg);
        transform: rotate(300deg);
    }

    @keyframes circle-line-spin {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes circle-line-spin {
        0% {
            -webkit-transform: rotate(0);
        }

        100% {
            -webkit-transform: rotate(360deg);
        }
    }
</style>
