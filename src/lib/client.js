import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'bducna1t',
    dataset: 'production',
    // apiVarsion: '2022-8-2',
    useCdn: true,
    // token: process.env.REACT_APP_SANITY_TOKIN
})
