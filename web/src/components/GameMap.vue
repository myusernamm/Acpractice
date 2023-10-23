<template>
    <div ref="parent" class="gamemap">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
import { GameMap } from '../../src/assets/scripts/GameMap.js';
import { ref, onMounted } from 'vue'//onMounted是我们的组件挂载完后应该执行哪些操作
export default {
    setup() {
        let parent = ref(null);
        let canvas = ref(null);
        onMounted(() => {
            new GameMap(canvas.value.getContext('2d'), parent.value)
        })
        return {
            parent,
            canvas
        }
    }
}
</script>

<style scoped>
div.gamemap {
    width: 100%;
    height: 100%;
    background-color: aquamarine;
    display: flex;
    /*同时实现水平居中与竖直居中*/
    justify-content: center;
    align-items: center;
}
</style>
