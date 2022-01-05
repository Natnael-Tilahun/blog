<template>
    <Layout>
         <div class="overflow-x-hidden ">
      <div id="contact" style="position: relative; top: -40px; left: 0" class="bg-gray-50"/>
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <h2 class="font-bold mb-6">Post your blogs:</h2>

          <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
          </div>

          <p class="mb-12">Static sites cannot submit forms on their own. However, services like <a href="https://www.netlify.com/docs/form-handling">Netlify Forms</a> or <a href="https://formspree.io">FormSpree</a> can help you do this without a backend.</p>

          <div class="text-lg sm:text-lg mb-16">
            <form action="#" class="mb-12">
              <div class="flex flex-wrap mb-6 -mx-4">
                  <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                      <label class="block mb-2 text-copy-primary" for="name">
                          Title
                      </label>

                      <input type="text" name="name" id="name" placeholder="title" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required>
                  </div>

                  <div class="w-full px-4 md:w-1/2">
                      <label class="block text-copy-primary mb-2" for="email">
                          Date
                      </label>

                      <input type="date" name="date" id="email" placeholder="date"  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required>
                  </div>
                  
              </div>

              <div class="flex flex-wrap mb-6 ">
              
             <div class="w-full px-4 md:w-1/2 -ml-4">
                      <label class="block text-copy-primary mb-2" for="email">
                          Image
                      </label>

                      <input type="file" name="image" id="email" placeholder=""  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" >
            </div>
            <div class="w-full md:w-1/2 mb-12 md:ml-4">
                  <label class="block text-copy-primary mb-2" for="message">
                      Description
                  </label>

                  <textarea id="Description" rows="5" name="Description" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4" placeholder="Enter your blog description here." required></textarea>
                          </div>
              </div>
              <div class="flex justify-end w-full">
                  <input type="submit" value="Post" class="block bg-gray-800 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3">
              </div>
          </form>
          </div>
        </div>
      </div> <!-- end contact-me -->
    </div>
    </Layout>
</template>