<template>
    <Layout>
 
          <div class=" md:py-16 lg:px-48 grid grid-cols-1 md:grid-cols-6">
                 <!-- <div>
                    <ul class="flex justify-items-start space-x-12 text-gray-700 font-bold pb-12 text-lg">
                    <li class="hover:text-gray-500 active:underline"><a href="">New</a></li>
                    <li class="hover:text-gray-500 active:underline"><a href="">Featured</a></li>
                    <li class="hover:text-gray-500 active:underline"><a href="">All</a></li></ul>
                  </div> -->
                  <div class="md:col-span-5 ">
                  <div class=" border-gray-300 border-b mb-16" v-for="edge in $page.blogs.edges" :key="edge.node.id">
                      <h2 class="text-3xl font-bold"><g-link  class="text-copy-primary hover:text-gray-500">{{edge.node.title}}</g-link></h2>
                      <div class="text-copy-secondary mb-4">
                        <span class="pr-2">{{edge.node.date}}</span>
                        <span> &middot; </span>
                        <span class="pr-5">5 min read</span>
                        <span class="pr-5 ">{{edge.node.like}} like</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline hover:fill-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>

                      <div class="text-lg mb-4">
                        {{edge.node.description}}
                      </div>

                      <div class="mb-8 flex space-x-5">
                        <p   class="font-bold uppercase hover:text-gray-500" @click="$router.push(`/blog/${edge.node.id}`)">Read More</p>
                        <!-- <button class="font-bold border-2 rounded-md px-5 py-1 hover:text-gray-300 hover:bg-slate-600">Like</button> -->
                      </div>
                  </div>
                  </div>


                   <!-- <div class=" lg:visible order-first md:order-none border-2 p-5 mx-auto w-96">
                    <ul class="flex justify-items-start space-x-12 text-gray-700 font-bold pb-12 text-lg">
                      <li class="hover:text-gray-500 active:underline"><a href="">New</a></li>
                      <li class="hover:text-gray-500 active:underline"><a href="">Featured</a></li>
                      <li class="hover:text-gray-500 active:underline"><a href="">All</a></li>
                    </ul>
                  </div> -->
      </div> <!-- end post -->

      <pagination-posts
        v-if="$page.blogs.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.blogs.pageInfo.totalPages"
        :currentPage="$page.blogs.pageInfo.currentPage"
      />
    </Layout>
</template>

<page-query>
query{
  blogs:allBlog(sortBy:"date",order:ASC,perPage:3,page:1)@paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title
        date (format: "MMMM D, Y h:mm a")
         description
        like
       }
    }
}
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    PaginationPosts
  },
    // context: {
    //       id: edge.node.id,
    //     },
  data(){
return{
  blogs:[]
}
  },
  mounted(){
    this.blogs=this.$page.blogs.edges
  }
}
</script>