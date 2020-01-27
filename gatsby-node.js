

exports.createResolvers = ({createResolvers}) => {
  const resolvers = {
    contentstackFormSuccessPage: {
      background_image: {
        resolve(source, args, context, info)  {
          if(!source.background_image) {
            return info.originalResolver(
              {
                ...source,
                background_image: {}
              },
              args,
              context,
              info
            )
          } else {
            return info.originalResolver(source, args, context, info)
          }
        }
      }
    }
  }
  createResolvers(resolvers)
}
