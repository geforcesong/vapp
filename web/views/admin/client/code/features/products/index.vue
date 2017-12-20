<template lang="pug">
el-container
    el-header
        h1 Products
    el-main
        el-row
            el-col(:span="24")
                el-button(type="primary", @click="createProduct") Create new product
</template>
<script>
export default {
  methods: {
    createProduct() {
      this.$router.push("/admin/products/create");
    }
  }
};
</script>
<style lang="scss" scoped>
.el-container {
  margin-left: 10px;
}
.el-header {
  padding: 0px;
  line-height: 60px;
}
.el-main{
    padding: 0px;
}
</style>