module.exports = `#graphql
type Query {
    """
    Get Location Info using place 
    """
  location(place: String!): [Location]
},
    """
    List out all related places 
    """
type Location {
  place: String
  city: String
  country: String
  latitude: String
  longitude: String
}
`;