<template>
    <Layout>
          <div class="container-inner mx-auto py-16">
           <div class="post border-gray-400 border-b mb-12">

               <h2 class="text-3xl font-bold"><g-link  class="text-copy-primary">dsa</g-link></h2>
        <div class="text-copy-secondary mb-4">
          <span>5676</span>
          <span> &middot; </span>
          <span>5 min read</span>
        </div>

        <div class="text-lg mb-4">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi neque voluptas commodi provident porro delectus, corporis earum deserunt ut nostrum dicta odit dolor consequuntur ipsam cupiditate, dignissimos quisquam alias similique.
        </div>

        <div class="mb-8">
          <g-link  class="font-bold uppercase">Read More</g-link>
        </div>
           </div>
      </div> <!-- end post -->

      <!-- <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      /> -->
    
    </Layout>
</template>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    PaginationPosts
  }
}
</script>