<template lang="pug">
    el-container
        el-header
                h1 Create new product
        el-main
            el-row
                el-col(:span="24")
                    textIo(:styleObject="{'height':'600px'}" initText="abcdefg")
</template>
<script>
import textIo from "../../common/components/editor";
export default {
  components: {
    textIo
  }
}
</script>
