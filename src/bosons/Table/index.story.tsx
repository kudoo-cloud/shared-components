import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Table from './index';
import _ from 'lodash';
import faker from 'faker';

let counter = 0;
export default class DemoTable extends Component<any, any> {
  constructor(props) {
    super(props);

    const columnData = [
      {
        id: 'firstName',
        label: 'First Name',
        type: 'string',
        renderCell: (row, column) => {
          return (
            <div
              style={{ fontWeight: 'bold', paddingLeft: 24, paddingRight: 24 }}
            >
              {row[column.id]}
            </div>
          );
        },
      },
      { id: 'lastName', label: 'Last Name', type: 'string' },
      {
        id: 'email',
        label: 'Email',
        sorted: true,
        order: 'asc',
        type: 'string',
        renderCell: (row, column) => {
          const email = row[column.id];
          return (
            <a
              href={`mailto:${email}`}
              style={{ paddingLeft: 24, paddingRight: 24 }}
            >
              {email}
            </a>
          );
        },
      },
      { id: 'title', label: 'Title', type: 'string' },
    ];

    let data = [
      {
        id: 3,
        firstName: 'Eloy',
        lastName: 'Roberts',
        email: 'Anabel40@yahoo.com',
        title: 'Customer Interactions Associate',
      },
      {
        id: 6,
        firstName: 'Adolphus',
        lastName: 'Cormier',
        email: 'Anne35@hotmail.com',
        title: 'Dynamic Accountability Administrator',
      },
      {
        id: 4,
        firstName: 'Dewitt',
        lastName: 'Kozey',
        email: 'Cletus_King@gmail.com',
        title: 'Internal Interactions Orchestrator',
      },
      {
        id: 5,
        firstName: 'Fausto',
        lastName: 'Bahringer',
        email: 'Deja5@gmail.com',
        title: 'Dynamic Infrastructure Orchestrator',
      },
      {
        id: 2,
        firstName: 'Shemar',
        lastName: 'Ledner',
        email: 'Guillermo16@yahoo.com',
        title: 'Global Metrics Consultant',
      },
      {
        id: 1,
        firstName: 'Toney',
        lastName: 'Ritchie',
        email: 'Hester40@yahoo.com',
        title: 'Future Integration Assistant',
      },
      {
        id: 8,
        firstName: 'Al',
        lastName: 'Willms',
        email: 'Itzel76@hotmail.com',
        title: 'Lead Identity Supervisor',
      },
      {
        id: 9,
        firstName: 'Kamren',
        lastName: 'Wyman',
        email: 'Magdalena50@yahoo.com',
        title: 'Lead Security Agent',
      },
      {
        id: 0,
        firstName: 'Ricardo',
        lastName: 'Heidenreich',
        email: 'Nathanael.Aufderhar@yahoo.com',
        title: 'Dynamic Metrics Representative',
      },
      {
        id: 7,
        firstName: 'Martin',
        lastName: 'Harvey',
        email: 'Vickie18@hotmail.com',
        title: 'Global Intranet Orchestrator',
      },
    ].sort((a, b) => (a.email < b.email ? -1 : 1));

    this.state = {
      columnData,
      data,
    };
  }

  _onRequestSort = (column) => {
    let { columnData } = this.state;
    let orderBy = column.id;
    let order = '';
    if (column.sorted) {
      let newColumn = column;
      newColumn.sorted = true;
      if (column.order === 'asc') {
        order = 'desc';
      } else if (column.order === 'desc') {
        order = 'asc';
      }
      newColumn.order = order;
      let pos = _.findIndex(columnData, { id: column.id });
      columnData[pos] = newColumn;
      this.setState({ columnData });
    } else {
      let pos = _.findIndex(columnData, { id: column.id });
      let alreadySortedColumn = _.find(columnData, { sorted: true });
      alreadySortedColumn.sorted = false;
      columnData[pos].sorted = true;
      columnData[pos].order = 'asc';
      order = 'asc';

      this.setState({ columnData });
    }

    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ data });
  };

  _onRemoveClicked = (row) => {
    let { data } = this.state;
    _.remove(data, { id: row.id });
    this.setState({ data });
  };

  render() {
    const { columnData, data } = this.state;
    return (
      <Table
        columnData={columnData}
        data={data}
        sortable
        onRequestSort={this._onRequestSort}
        onRemoveClicked={this._onRemoveClicked}
        loading
      />
    );
  }
}

storiesOf('Table', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: '10px' }}>
      <DemoTable />
    </div>
  ))
);
