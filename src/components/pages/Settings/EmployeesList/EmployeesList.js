import React  from 'react';
import { Table, Popconfirm, Form } from 'antd';
import "./EmployeesList.scss";
import 'antd/dist/antd.css';

const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

export default class EmployeesList extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                width: '30%',

            },
            {
                title: 'Last name',
                dataIndex: 'lastName',
                width: '30%',

            },
            {
                title: 'Email',
                dataIndex: 'email',
                width: '30%',

            },
            {
                title: 'phone number',
                dataIndex: 'phoneNumber',
                width: '30%',

            },
            {
                title: 'Operation',
                dataIndex: 'operation',
                render: (_, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <img src="./assets/icons/delete.svg"  className="deleteIcon"/>
                        </Popconfirm>
                    ) : null,
            },
        ];
        this.state = {
            dataSource: [
                {
                    key: '0',
                    name: 'Edward 0',
                    lastName: 'King',
                    email: 'eduardking@mail.com',
                    phoneNumber: '235467890',
                },
            ],
            count: 3,
        };
    }

    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter((item) => item.key !== key),
        });
    };
    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableRow,

            },
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }

        });

        return (
            <div className="employeesContainer">

                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                    pagination= {true}
                /> 
            </div>
        );
    }
}


