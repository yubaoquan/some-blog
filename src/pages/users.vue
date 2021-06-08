<template>
  <Layout>
    <div @click="foo">There {{ users.length }} in total</div>
    <div v-for="user in users" :key="user.id" @click="showUser(user)">
      <div>
        <g-link :to="user.path">{{ user.id }}</g-link>
        <span>&nbsp;&nbsp;{{ user.name }}&nbsp;&nbsp;</span>
        <span>{{ user.email }}</span>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  users: allUser (
    sortBy: "id"
    order: ASC
  ) {
    edges {
      node {
        id
        name
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'UserListPage',
  metaInfo: {
    title: 'User List'
  },
  methods: {
    foo() {
      console.info(this.$page.users)
    },
    showUser(user) {
      console.info(user)
    }
  },
  computed: {
    users() {
      return this.$page.users.edges.map(edge => edge.node)
    }
  }
}
</script>

<style>

</style>
