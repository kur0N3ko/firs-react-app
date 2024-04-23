import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useContactStore } from '../StoreFolder/useContactStore';
import { Button, Form, Input } from 'antd';

function Contact() {
    const [form] = Form.useForm();
    const [uname, setUName] = useState('');
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    //
    const addContact = useContactStore((state) => state.addContact);
    const contacts = useContactStore((state) => state.contacts);

    //To handle submit
    const handleSubmit = () => {
        addContact({ uname, fname, lname, number, email });
        form.resetFields();
    };

    return (
        <div>
            <Navbar />
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
                <Form form={form} onFinish={handleSubmit} labelCol={{span: 8}} wrapperCol={{span: 16}} style={{maxWidth: 600}} >
                    <Form.Item label="User Name" name="uname" rules={[{ required: true, message: 'Please enter your username' }]}>
                        <Input placeholder='User Name' onChange={(e) => setUName(e.target.value)} style={{ width: '360px' }} />
                    </Form.Item>
                    <Form.Item label="First Name" name="fname" rules={[{ required: true, message: 'Please enter your first name' }]}>
                        <Input placeholder='First Name' onChange={(e) => setFName(e.target.value)} style={{ width: '360px' }} />
                    </Form.Item>
                    <Form.Item label="Last Name" name="lname" rules={[{ required: true, message: 'Please enter your last name' }]}>
                        <Input placeholder='Last Name' onChange={(e) => setLName(e.target.value)} style={{ width: '360px' }} />
                    </Form.Item>
                    <Form.Item label="Contact Number" name="number" rules={[{ required: true, message: 'Please enter your contact number' }]}>
                        <Input placeholder='Contact Number' onChange={(e) => setNumber(e.target.value)} style={{ width: '360px' }} />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
                        <Input placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} style={{ width: '360px' }} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Add Contact</Button>
                    </Form.Item>
                </Form>

            <table className="w-4/5 ml-10 border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 py-2 px-4">User Name</th>
                        <th className="border border-gray-300 py-2 px-4">First Name</th>
                        <th className="border border-gray-300 py-2 px-4">Last Name</th>
                        <th className="border border-gray-300 py-2 px-4">Contact Number</th>
                        <th className="border border-gray-300 py-2 px-4">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.email} className="hover:bg-gray-100">
                            <td className="border border-gray-300 py-2 px-4">{contact.uname}</td>
                            <td className="border border-gray-300 py-2 px-4">{contact.fname}</td>
                            <td className="border border-gray-300 py-2 px-4">{contact.lname}</td>
                            <td className="border border-gray-300 py-2 px-4">{contact.number}</td>
                            <td className="border border-gray-300 py-2 px-4">{contact.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contact;

// {/* <form onSubmit={handleSubmit} >
//     <div className="flex flex-col mb-4">
//         <label htmlFor="name" className="mb-1">Name</label>
//         <input
//             type="text"
//             id="name"
//             placeholder="Enter name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
//             required
//         />
//     </div>
//     <div className="flex flex-col mb-4">
//         <label htmlFor="number" className="mb-1">Contact Number</label>
//         <input
//             type="text"
//             id="number"
//             placeholder="Enter contact number"
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//             className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
//             required
//         />
//     </div>
//     <div className="flex flex-col mb-4">
//         <label htmlFor="email" className="mb-1">Email</label>
//         <input
//             type="email"
//             id="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
//             required
//         />
//     </div>
//     <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//         Add Contact
//     </button>
// </form> */}