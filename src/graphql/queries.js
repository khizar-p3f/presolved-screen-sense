/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClients = /* GraphQL */ `
  query GetClients($id: ID!) {
    getClients(id: $id) {
      id
      name
      company
      email
      phone
      address
      city
      state
      zip
      country
      clientID
      clientSecret
      domains
      createdAt
      updatedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        company
        email
        phone
        address
        city
        state
        zip
        country
        clientID
        clientSecret
        domains
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecordings = /* GraphQL */ `
  query GetRecordings($id: ID!) {
    getRecordings(id: $id) {
      id
      clientID
      name
      description
      url
      duration
      attributes
      recordedAt
      agent
      createdAt
      updatedAt
    }
  }
`;
export const listRecordings = /* GraphQL */ `
  query ListRecordings(
    $filter: ModelRecordingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecordings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientID
        name
        description
        url
        duration
        attributes
        recordedAt
        agent
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
