<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Article List</h2>
    <table class="min-w-full border rounded-lg overflow-hidden">
      <thead class="bg-gray-200">
        <tr>
          <th class="px-4 py-2">Title</th>
          <th class="px-4 py-2">Content</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in allArticles" :key="article.id">
          <td class="px-4 py-2">{{ article.title }}</td>
          <td class="px-4 py-2">{{ article.content }}</td>
          <td class="px-4 py-2">
            <button @click="editArticle()" class="text-indigo-600 hover:text-indigo-800">
              Edit
            </button>
            <button @click="confirmDelete(article.id)" class="text-red-600 hover:text-red-800">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="showCreatePopup" class="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md">
      Create Article
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('articleModule', ['allArticles']),
  },
  methods: {
    ...mapActions('articleModule', ['fetchArticles', 'deleteArticle']),
    editArticle() {
    },
    confirmDelete() {
    },
    showCreatePopup() {
    },
  },
  created() {
    this.fetchArticles();
  },
};
</script>