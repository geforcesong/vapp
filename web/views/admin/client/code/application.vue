<template lang="pug">
    el-container
        el-aside(style="width:150px;")
            el-menu
                el-menu-item(index="1")
                    router-link(:to="{ path: '/admin/categories' }" class="nav-link") CityHub
                el-menu-item(index="2")
                    router-link(:to="{ path: '/admin/products' }" class="nav-link") Articles
                el-menu-item(index="3")
                    router-link(:to="{ path: '/admin/users' }" class="nav-link") Users
        el-main
            router-view
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-menu-item{
    border-bottom: 1px solid #e6e6e6;
    &:last-child{
        border: 0;
    }
}

.nav-link{
    color:#409EFF;
    text-decoration:none;
}
</style>
