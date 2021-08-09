import { DynamoDB } from "aws-sdk";
import { Entity, Table } from "dynamodb-toolbox";
import * as faker from "faker";

// Require AWS SDK and instantiate DocumentClient
const DocumentClient = new DynamoDB.DocumentClient({
  endpoint: `http://localhost:4566`,
});

// Instantiate a table
const MyTable = new Table({
  // Specify table name (used by DynamoDB)
  name: "my-first-table",

  // Define partition and sort keys
  partitionKey: "pk",
  sortKey: "sk",

  // Add the DocumentClient
  DocumentClient,
});

type Customer = {
  pk: number;
  sk: string;
  name: string;
  company: string;
  age: number;
  status: string;
  data_added: string;
};

const Customer = new Entity<Customer>({
  // Specify entity name
  name: "Customer",

  // Define attributes
  attributes: {
    id: { partitionKey: true }, // flag as partitionKey
    sk: { hidden: true, sortKey: true }, // flag as sortKey and mark hidden
    name: { map: "data" }, // map 'name' to table attribute 'data'
    co: { alias: "company" }, // alias table attribute 'co' to 'company'
    age: { type: "number" }, // set the attribute type
    status: ["sk", 0], // composite key mapping
    date_added: ["sk", 1], // composite key mapping
  },

  // Assign it to our table
  table: MyTable,
});

export const addCustomer = async (): Promise<void> => {
  const item = {
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    company: faker.company.companyName(),
    age: Math.floor(Math.random() * 100),
    status: "active",
    date_added: "2020-04-24",
  };

  // Use the 'put' method of Customer
  await Customer.put(item);
};

export const scanTable = async (): Promise<any> => {
  const res = await MyTable.scan({
    limit: 10,
  });
  return res;
};
