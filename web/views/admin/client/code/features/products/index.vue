<template lang="pug">
el-container
    el-header
        h1 Products
    el-main
        el-row
            el-col(:span="24")
                el-button(type="primary", @click="createProduct") Create new product
        el-row
            el-col(:span="24")
                el-table(:data="productList" style="width: 100%")
                    el-table-column(prop="name" label="Name")
                    el-table-column(prop="categories" label="Categories" :formatter="formatCategories")
                    el-table-column(prop="isActive" label="IsActive" :formatter="formatBoolean")
                    el-table-column(prop="createdTime" label="Created Time" :formatter="formatDateTime")
                    el-table-column
                        template(slot-scope="scope")
                            el-button(size="small" icon="el-icon-edit" @click="editProduct(scope.row)")
                            el-button(size="small" icon="el-icon-delete" @click="deleteRow(scope.row)")
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("products", ["productList"])
  },
  methods: {
    ...mapActions("products", ["loadProduct", "deleteProduct", "updateProduct"]),
    createProduct() {
      this.$router.push("/admin/products/create");
    },
    formatDateTime(row, column) {
      var d = new Date(row.createdTime);
      return d.toLocaleDateString() + " " + d.toLocaleTimeString();
    },
    formatBoolean(row, column) {
      return row.isActive.toString();
    },
    formatCategories(row) {
      let cname = "No Category";
      if (row.categories && row.categories.length) {
        cname = "";
        row.categories.forEach(c => {
          if (cname) {
            cname += ", ";
          }
          cname += c.name;
        });
      }
      return cname;
    },
    editProduct(row) {
      this.$router.push(`/admin/products/${row._id}`);
    },
    deleteRow(product) {
      this.$confirm(
        `Do you want to delete this product - ${product.name}?`,
        "Confirmation",
        {
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          type: "warning"
        }
      ).then(() => {
          this.deleteProduct(product);
        }).catch(() => {});
    }
  },
  created() {
    this.loadProduct();
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
.el-main {
  padding: 0px;
}
</style>