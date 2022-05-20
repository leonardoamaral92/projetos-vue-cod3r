<template>
    <div class="life-bar">
        <div class="bar" 
            :class="{ danger: value <= 30 }" 
            :style="{ width: value + '%' }">
        </div>
    </div>
</template>

<script>
export default {
    name: 'LifeBar',
    props: {
        value: Number,
    }
}
</script>

<style scoped>
.life-bar {
    border: 1px solid #000;
    background-color: #fff;
    width: 80%;
    height: 20px;
}

.bar {
    height: 100%;
    background-color: green;
}

.danger{
    background-color: red;
}
</style>