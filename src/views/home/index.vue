<template>
  <div class="home-container">
    1231231123231
    <template v-for="(item, index) in permissionRoutes" :key="index">
      <router-link v-if="!item.hidden" class="nofound" :to="item.path">
        {{ item.path }}
      </router-link>
    </template>
    <div>{{ num }}</div>
    <div>{{ count }}</div>
    <div>{{ double }}</div>
    <button @click="addNum">加num</button>
    <button @click="addCount">加count</button>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { onMounted, computed, reactive, toRefs } from "vue";
import { version } from "/@/api/common";
interface State {
  count: number;
  double: number;
  num: number;
  permissionRoutes: Object;
}

export default {
  name: "Home",
  setup (props: any, context: any){
    const state: State = reactive({
      permissionRoutes: [],
      count: 0,
      num: 0,
      double: computed(() => state.count * state.num)
    });
    // console.log(props);
    // console.log(context);
    onMounted(async () => {
      console.log("component is onMounted");
      const store = useStore();
      const versionData = await version();
      console.log(versionData)
      state.permissionRoutes = store.getters.permissionRoutes;
    });

    function addNum(): void {
      state.num += 1;
    }

    function addCount(): void {
      state.count += 1;
    }

    return {
      ...toRefs(state),
      addNum,
      addCount
    };
  }
};
</script>

<style lang="scss" scoped>
.nofound {
  color: #533;
  display: block;
  font-size: 30px;
}
</style>
