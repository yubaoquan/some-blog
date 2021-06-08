<template>
  <Layout>
    <div>User ID is {{ $page.user.id }}</div>
    <div>Name: {{ $page.user.name }}</div>
    <div>Email: {{ $page.user.email }}</div>
    <div>Street: {{ $page.user.address.street }}</div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  user (id: $id) {
    id
    name
    email
    address {
      street
    }
  }
}
</page-query>

<script>
export default {
  name: 'UserPage',
  metaInfo: {
    title: 'User Page'
  },
  methods: {
    showUser(user) {
      console.info(user)
    }
  }
}
</script>

<style>

</style>
