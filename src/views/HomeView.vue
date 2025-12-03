<template>
  <section class="card">
    <h2>首页</h2>
    <p>这是一个 Vue3 + Vue Router + Vite 的基础项目示例。</p>

    <div class="info">
      <h3>当前模块划分示例</h3>
      <ul>
        <li>基础页面：`views/HomeView.vue`，`views/AboutView.vue`</li>
        <li>用户模块：`views/modules/user/*`</li>
        <li>公共 JSON：`public/config/app-config.json`、`public/mock/users.json`</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
}

h2 {
  margin-bottom: 8px;
}

.info {
  margin-top: 16px;
  font-size: 14px;
  color: #4b5563;
}

ul {
  margin-top: 8px;
  padding-left: 20px;
}
</style>


