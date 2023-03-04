/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClients = /* GraphQL */ `
  mutation CreateClients(
    $input: CreateClientsInput!
    $condition: ModelClientsConditionInput
  ) {
    createClients(input: $input, condition: $condition) {
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
export const updateClients = /* GraphQL */ `
  mutation UpdateClients(
    $input: UpdateClientsInput!
    $condition: ModelClientsConditionInput
  ) {
    updateClients(input: $input, condition: $condition) {
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
export const deleteClients = /* GraphQL */ `
  mutation DeleteClients(
    $input: DeleteClientsInput!
    $condition: ModelClientsConditionInput
  ) {
    deleteClients(input: $input, condition: $condition) {
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
export const createRecordings = /* GraphQL */ `
  mutation CreateRecordings(
    $input: CreateRecordingsInput!
    $condition: ModelRecordingsConditionInput
  ) {
    createRecordings(input: $input, condition: $condition) {
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
export const updateRecordings = /* GraphQL */ `
  mutation UpdateRecordings(
    $input: UpdateRecordingsInput!
    $condition: ModelRecordingsConditionInput
  ) {
    updateRecordings(input: $input, condition: $condition) {
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
export const deleteRecordings = /* GraphQL */ `
  mutation DeleteRecordings(
    $input: DeleteRecordingsInput!
    $condition: ModelRecordingsConditionInput
  ) {
    deleteRecordings(input: $input, condition: $condition) {
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
