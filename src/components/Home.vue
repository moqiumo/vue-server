<template>
  <el-container class="home_container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="" alt="">
                <span>电商后台管理系统管理</span>
            </div>
            <el-button type="info" @click="logout"> 退出</el-button>
        </el-header>
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="toggles ? '64px' : '200px'">
                <div class="toggle-button" @click="toggleCollapse">|||</div>
                <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" :unique-opened="true" :collapse="toggles"
                :collapse-transition="false" :router="true" >
                    <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
                        <!-- 一级模板区 -->
                        <template slot="title">
                            <!-- 图标 -->
                            <i :class="iconsObj[item.id]"></i>
                            <!-- 文本 -->
                            <span>{{item.authName}}</span>
                        </template>
                        <!-- 二级菜单 -->
                         <el-menu-item>
                                 <i class="el-icon-menu"></i>
                                 <!-- 文本 -->
                                 <span>{{subItem.authName}}</span>
                         </el-menu-item>
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
export default{
   data () {
    return {
    // 菜单数据
      menuList: [
      ],
      iconsObj: {
        101: 'el-icon-s-custom',
        102: 'el-icon-tickets',
        103: 'el-icon-shopping-bag-2'    
      },
      toggles: false,
      // 链接地址
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style>



</style>