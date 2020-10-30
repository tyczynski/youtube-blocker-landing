// TODO: fix any
/**
 * Get `sizes` param to `ImageSet`
 *
 * @param size
 */
export const getImageSets: any = (size: number) => [
  {
    type: 'image/webp',
    rules: {
      '280w': {
        opt: {
          o: 'webp',
          rs: {
            s: `${size}x`,
          },
        },
      },
    },
  },
  {
    rules: {
      '280w': {
        opt: {
          rs: {
            s: `${size}x`,
          },
        },
      },
    },
  },
]
