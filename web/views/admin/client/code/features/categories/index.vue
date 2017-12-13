<template lang="pug">
    el-container
        categoryForm(ref="categoryForm")
        el-header
            h1 Categories{{count}}
        el-main
            el-row
                el-col(:span="24")
                    el-button(type="primary", @click="createCategory") Create Category
</template>
<script>
import categoryForm from "./components/categoryForm";
import { mapActions, mapGetters } from 'vuex'
export default {
  methods:{
      ...mapActions('categories', ['updateCount']),
      async createCategory(){
          this.$refs.categoryForm.open();
          //return this.$store.commit('categories/increment');
          let k = await this.updateCount(4);
          alert(k);
      }
  },
  computed:{
      ...mapGetters('categories', ['count'])
    //   count(){
    //       return this.$store.state.categories.count;
    //   }
  },
  components:{
      categoryForm
  }
}
</script>

<style lang="scss" scoped>
    .el-container{
        margin-left: 10px;
    }
    .el-header{
        padding: 0px;
        line-height: 60px;
    }
</style>