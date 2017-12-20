<template lang="pug">
    el-container
        el-header
                h1 Create new product
        el-main
            el-row
                el-col(:span="24")
                    el-input(v-model="productName" placeholder="Please input product name")
                    el-select(v-model="productCategories",multiple,placeholder="Please select categories")
                        el-option(v-for="item in categoryList" :key="item._id" :label="item.name" :value="item._id")
                    div(style="margin:15px 0") Detail Description:
                    textIo(:styleObject="{'height':'600px'}" :initText="contentHTML")
                    br
                    br
                    el-button(type="primary" @click="save") Save
</template>
<script>
import textIo from "../../common/components/editor";
import editorBus from "../../common/buses/editorBus";
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions("categories", ["loadCategory"]),
    save(){
        console.log(this.contentHTML);
    }
  },
  computed: {
    ...mapGetters("categories", ["categoryList"])
  },
  data() {
    return {
      contentHTML: "aaa",
      productName: "",
      productCategories: []
    };
  },
  components: {
    textIo
  },
  created() {
    this.loadCategory();
    editorBus.$on("editor-changed", content => {
      this.contentHTML = content;
    });
  }
};
</script>

<style lang="scss" scoped>
.el-select {
  margin-top: 15px;
  width: 350px;
}
</style>

