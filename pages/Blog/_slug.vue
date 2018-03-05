<template>
  <article>
    <h1>{{data.title}}</h1>
    <div class="article-body" v-html="article" v-once></div>
  </article>
</template>

<script>
import axios from 'axios'
const config = {
  baseURL: 'http://localhost:3000'
}
export default {
  async asyncData({ params, error, payload }) {
    if (payload) {
      return payload
    }
    const html = axios(`/_posts/${params.slug}.html`, config)
    const json = axios(`/_posts/${params.slug}.json`, config)
    const [{ data: article }, { data }] = await Promise.all([html, json])
    return {
      article,
      data
    }
  }
}
</script>
