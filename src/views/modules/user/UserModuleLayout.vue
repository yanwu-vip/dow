<template>
  <section class="card">
    <h2>用户模块</h2>
    <p>演示从公共 JSON 读取用户列表。</p>

    <button class="btn" @click="loadUsers" :disabled="loading">
      {{ loading ? '加载中...' : '加载用户数据' }}
    </button>

    <ul v-if="users.length" class="user-list">
      <li v-for="user in users" :key="user.id">
        <strong>{{ user.name }}</strong>
        <span class="email">{{ user.email }}</span>
      </li>
    </ul>

    <p v-else class="empty">暂无数据，请点击上方按钮请求公共 JSON。</p>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const users = ref([]);
const loading = ref(false);

const loadUsers = async () => {
  try {
    loading.value = true;
    const res = await fetch('/mock/users.json');
    const data = await res.json();
    users.value = data.users || [];
  } catch (e) {
    console.error('加载用户 JSON 失败', e);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
}

.btn {
  margin-top: 12px;
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  background: #2563eb;
  color: #ffffff;
  cursor: pointer;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.user-list {
  margin-top: 16px;
  padding-left: 0;
  list-style: none;
}

.user-list li {
  padding: 8px 0;
  border-bottom: 1px solid #e5e7eb;
}

.email {
  margin-left: 8px;
  color: #6b7280;
  font-size: 13px;
}

.empty {
  margin-top: 16px;
  color: #9ca3af;
}
</style>


