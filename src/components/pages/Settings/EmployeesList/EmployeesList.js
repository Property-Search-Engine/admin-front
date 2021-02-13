import React from "react";
import { connect } from "react-redux";
import {
  deleteEmployee,
  fetchEmployeesList,
} from "../../../../redux/employees/employees-actions";
import { Table, Popconfirm, Form } from "antd";
import "./EmployeesList.scss";
import "antd/dist/antd.css";
import { isEmptyArray } from "formik";

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
class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.props.employeeList.map((emp, i) => {
        emp.key = "employee-" + i;
        return emp;
      }),
    };
    this.columns = [
      {
        title: "Name",
        dataIndex: "firstname",
        width: "30%",
      },
      {
        title: "Last name",
        dataIndex: "lastname",
        width: "30%",
      },
      {
        title: "Email",
        dataIndex: "email",
        width: "30%",
      },
      {
        title: "Phone number",
        dataIndex: "phone",
        width: "30%",
      },
      {
        title: "Operation",
        dataIndex: "operation",
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <img
                alt="trash icon"
                src="./assets/icons/delete.svg"
                className="deleteIcon"
              />
            </Popconfirm>
          ) : null,
      },
    ];
  }
  handleDelete = (key) => {
    const dataSource = this.state.dataSource;
    const employeeToDelete = dataSource.filter((item) => item.key === key)[0];
    console.log(employeeToDelete);
    this.props.deleteEmployee(employeeToDelete._id);
  };
  componentDidMount() {
    const { employeeList, fetchEmployees, deletedSuccess } = this.props;
    if (!employeeList || isEmptyArray(employeeList) || deletedSuccess) {
      fetchEmployees();
      this.forceUpdate();
    }
  }

  render() {
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
          rowClassName={() => "editable-row"}
          bordered
          dataSource={this.state.dataSource}
          columns={columns}
          pagination={true}
        />
      </div>
    );
  }
}

//Pass the properties state to be accessible by the component
const mapStateToProps = (state) => {
  return {
    employeeList: state.employeesState.employeeList,
    deletedSuccess: state.employeesState.deletedSuccess,
  };
};

//Pass the actions functions to be accessible by the component
const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(fetchEmployeesList()),
    deleteEmployee: (id) => dispatch(deleteEmployee(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);
