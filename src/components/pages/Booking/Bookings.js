import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Sidebar from "../../common/Sidebar/Sidebar";
import Header from "../../common/Header/Header";
import "../Booking/Bookings.scss";

class Bookings extends Component {
    state = {
        date: ""
    };

    componentDidMount() {
        this.getDate();
    }

    getDate = () => {
        const date = new Date().toDateString();
        this.setState({ date });
    };

    handleOptions = (e) => {
        e.preventDefault();
        const bookings = this.getBookings.value;

        const data = {
            //id: new Date(), Date of the booking? 
            accept: false,
            deny: false,
            pending: false
        }
        this.props.dispatch({
            type: 'BOOKINGS_ACCEPT',
            data
        });
        this.getBookings.value = '';

        this.props.dispatch({
            type: 'BOOKINGS_DENY',
            data
        });
        this.getBookings.value = '';
    }
    render() {
        const { date } = this.state;
        return (
            <main className="d-flex flex">
                <Sidebar active="bookings" />
                <div className="mainContainer">
                    <Header />
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Request Date</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{date}</td> {/* user id  ddd {this.state.date} */}
                                <td>Table cell</td> {/* user name */}
                                <td>Table cell</td> {/* user phone number */}
                                <td>
                                    {/* Actions buttons */}
                                    <button onClick={() => this.props.dispatch({ type: 'BOOKINGS_ACCEPT' })} className="b-actionBtn">Accept</button>
                                    <button onClick={() => this.props.dispatch({ type: 'BOOKINGS_DENY' })} className="b-actionBtn">Deny</button>
                                    <button className="b-actionBtn">Pending</button>

                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        )
    }
}


export default connect()(Bookings);