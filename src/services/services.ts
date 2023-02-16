import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://techcrunch.com/wp-json/wp/v2/'}),
    endpoints: (builder) => ({
        getAllCards: builder.query<[], void>({
            query: () => `posts?per_page=10&content=embed`,
            transformResponse: (response: any) => {
                return response ? response.map((item: any) => {
                        return {
                            title: item.title,
                            id: item.id,
                            date: item.date.split('-').join('/').substring(0, item.date.split('-').join('/').indexOf('T')),
                            image: item.jetpack_featured_media_url,
                            description: item.primary_category.description.slice(0, 100)
                        }
                    })
                    : []
            }
        }),
    }),
})

export const {useGetAllCardsQuery} = cardsApi
