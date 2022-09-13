export default {
    name: 'popular_products',
    title: 'PopularProducts',
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
  