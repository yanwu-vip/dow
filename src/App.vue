<template>
  <div class="app-layout">
    <header class="app-header">
      <h1>Vue3 示例项目</h1>
      <nav class="nav">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/about">关于</RouterLink>
        <RouterLink to="/modules/user">用户模块</RouterLink>
      </nav>
    </header>

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: #1f2933;
  color: #fff;
}

.nav {
  display: flex;
  gap: 16px;
}

.nav a {
  color: #e5e7eb;
  text-decoration: none;
}

.nav a.router-link-active {
  color: #3b82f6;
  font-weight: 600;
}

.app-main {
  flex: 1;
  padding: 24px;
  background: #f3f4f6;
}
</style>


