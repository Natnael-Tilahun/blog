// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('http://localhost:1337/api/blogs')
    const { datas } = await axios.get('http://localhost:1337/api/upload/files/')


    const collection = actions.addCollection({
      typeName: 'Blog',
      path:'/blog/:id'
    })

    for (const post of data.data) {
      collection.addNode({
        id: post.id,
        path:'/blog/'+post.id,
        title: post.attributes.Title,
        description: post.attributes.Description,
        date: post.attributes.Date,
        like: post.attributes.Like,
        // image:datas+ post.id.formats.medium.url
      })
  
    }

    // for (const post of datas) {
    //   collection.addNode({
    //     id: post.id,
    //     name:post.name
    //     // path:'/blog/'+post.id,
    //     // title: post.attributes.Title,
    //     // description: post.attributes.Description,
    //     // date: post.attributes.Date,
    //     // like: post.attributes.Like,
    //     // image:datas+ post.id.formats.medium.url
    //   })
    // }

  //   const d=datas.map((post) => {
  //      collection.addNode({
  //       id: post.id,
  //       name:post.name
  //     }) 
  // })
  })
}
