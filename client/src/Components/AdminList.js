import React from 'react';

import Message from './Message'

const AdminList = ({ color, message, adminList, handleAdminDelete }) => {
    return (
        <div>
            {/* <button className='btn btn-primary mr-2' type='button' onClick={changeView} value='instructor'>Instructor List</button> */}
            {/* <button className='btn btn-primary' type='button' onClick={changeView} value='student'>Student List</button> */}
            <h3 className='mt-3'>Admins</h3>
            <Message
                message={message}
                color={color}
            />
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>

                    {adminList ?
                        adminList.map((admin, i) => (
                            <tr key={i}>
                                <td>{admin.id}</td>
                                <td>{admin.firstName} {admin.lastName}</td>
                                <td>{admin.email}</td>
                                <td><button type='button' className='btn btn-danger' onClick={() => handleAdminDelete(admin.id)}>x</button></td>
                            </tr>
                        )) : 'No Admins'
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminList;