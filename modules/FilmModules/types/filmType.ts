export interface FilmType {
  data: [
    {
      id: number
      attributes: {
        name: string
        series?: string
        date: string
        like: number
        dislike: number
        preview: {
          data: {
            id: number
            attributes: {
              name: string
              url: string
            }
          }
        },
        comments: [
          {
            id: number
            author: string
            text: string
            like: number
            dislike: number
          }
        ]
      }
    }
  ],
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}