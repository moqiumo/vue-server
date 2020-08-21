<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/tx.png" alt="">
        <span>电商后台管理系统管理</span>
      </div>
      <el-button type="info" @click="logout"> 退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="toggles ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="" @close="handleClose"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">和平精英电视台</template>
              <el-menu-item index="1-1">账号管理</el-menu-item>
              <el-menu-item index="1-2">需求管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容区 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        // 菜单数据
        menuList: [
        ],
        toggles: false

      }
    },
    created() {
      this.getMenuList()
    },
    methods: {
      logout() {
        window.sessionStorage.clear()
        this.$router.push('/login')
      },
      // 获取所有菜单
      async getMenuList() {
        const { data: res } = await this.$http.get('tga/menus')
        if (res.code !== 200) return this.$message.error(res.msg)
        this.menuList = res.data
      },
      // 切换菜单展开与折叠
      toggleCollapse() {
        this.toggles = !this.toggles
      }
    }
  }
</script>
<style>
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 0;
    align-items: center;
    color: #fff;
    font-size: 20px;

    >div {
      display: flex;
      align-items: center;

      span {
        margin-left: 15px;
      }
    }
  }

  .el-header div {
    line-height: center;
  }

  .el-aside {
    background-color: #333744;

    .el-menu {
      border-right: none;
    }
  }

  .el-main {
    background-color: #eaedf1;
  }

  .home_container {
    width: 100%;
    height: 100%;
  }

  .iconfont {
    margin-right: 10px;
  }

  .toggle-button {
    background-color: #333744;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.4em;
    cursor: pointer;
  }
</style>