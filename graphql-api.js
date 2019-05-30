const { GraphQLClient } = require('graphql-request')
const config = require('./gatsby-config.js')

const getGraphqlOptions = config => {
  let graphqlPlugin = config.plugins.find(plugin => {
    if (typeof plugin === 'string') return false
    return plugin.resolve === 'gatsby-source-graphql'
  })

  return [graphqlPlugin.options.url, { headers: graphqlPlugin.options.headers }]
}

module.exports = new GraphQLClient(...getGraphqlOptions(config))
