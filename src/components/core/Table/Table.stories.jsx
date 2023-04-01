import Table from './Table';

export default {
  title: 'Components/Data display/Table',
  component: Table,
};

export const Default = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row className="hover:bg-transparent dark:hover:bg-transparent">
            <Table.Cell>First name</Table.Cell>
            <Table.Cell>Last name</Table.Cell>
            <Table.Cell>Age</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell data-label="First name">John</Table.Cell>
            <Table.Cell data-label="Last name">Doe</Table.Cell>
            <Table.Cell data-label="Age">42</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell data-label="First name">Jane</Table.Cell>
            <Table.Cell data-label="Last name">Doe</Table.Cell>
            <Table.Cell data-label="Age">39</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
};

export const ManyColumns = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row className="hover:bg-transparent dark:hover:bg-transparent">
            <Table.Cell>First name</Table.Cell>
            <Table.Cell>Last name</Table.Cell>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>ID number</Table.Cell>
            <Table.Cell>Address</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell data-label="First name">John</Table.Cell>
            <Table.Cell data-label="Last name">Doe</Table.Cell>
            <Table.Cell data-label="Age">42</Table.Cell>
            <Table.Cell data-label="ID number">123456789</Table.Cell>
            <Table.Cell data-label="Address">123 Main St, Anytown, USA</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell data-label="First name">Jane</Table.Cell>
            <Table.Cell data-label="Last name">Doe</Table.Cell>
            <Table.Cell data-label="Age">39</Table.Cell>
            <Table.Cell data-label="ID number">987654321</Table.Cell>
            <Table.Cell data-label="Address">987 Elm St, Anytown, USA</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
};

// dynamic data
function createData(firstName, lastName, age) {
  return { firstName, lastName, age };
}

const data = [createData('John', 'Doe', 42), createData('Dennis', 'Rios', 39)];

// or
// const data = [
//   { firstName: 'John', lastName: 'Doe', age: 42 },
//   { firstName: 'Dennis', lastName: 'Rios', age: 39 },
// ];

export const WithObjectData = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row className="hover:bg-transparent dark:hover:bg-transparent">
            <Table.Cell>First name</Table.Cell>
            <Table.Cell>Last name</Table.Cell>
            <Table.Cell>Age</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map((row) => {
            return (
              <Table.Row key={row.firstName + row.lastName + row.age}>
                <Table.Cell data-label="First name">{row.firstName}</Table.Cell>
                <Table.Cell data-label="Last name">{row.lastName}</Table.Cell>
                <Table.Cell data-label="Age">{row.age}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </>
    ),
  },
};
