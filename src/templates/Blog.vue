<template>
    <Layout>
         <div class="container mx-auto my-16 md:px-48">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.blog.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.blog.date }}</div>
      <!-- <div class="flex mb-8 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300">
          {{ tag.title }}
        </g-link>
      </div> -->
      <div class=" mb-8" v-html="$page.blog.description" />
      <div class="mb-8">
        <p @click="$router.back()" class="font-bold uppercase hover:text-gray-500">Back to Blog</p>
      </div>
    </div>
    </Layout>
</template>

<page-query>
query{
  blog(id:"2"){
     id
    title
    date (format: "MMMM D, Y, h:mm a ")
     description
    like
  }
}
</page-query>