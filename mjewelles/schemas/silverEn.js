export default {
  name: 'silver_products',
  title: 'SilverProducts',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    {
      title: "Video blog post",
      name: "videoBlogPost",
      type: "document",
      fields: [
        { title: "Title", name: "title", type: "string" },
        {
          title: "Video file",
          name: "video",
          type: "mux.video"
        }
      ]
    } ,
    { 
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    { 
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    { 
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    { 
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    { 
      name: 'name_ar',
      title: 'Name_Ar',
      type: 'string',
    },
    { 
      name: 'details_ar',
      title: 'Details_Ar',
      type: 'string',
    },
    { 
      name: 'category_ar',
      title: 'Category_Ar',
      type: 'string',
    },
    { 
      name: 'id',
      title: 'Id',
      type: 'number',
    },
  ]
}
