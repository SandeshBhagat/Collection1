import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
	const [fname, setFname] = useState('');
	const [file, setFile] = useState('');
	console.log(fname);
	console.log(file);

	const setData = (e) => {
		const { value } = e.target;
		setFname(value);
	};

	const setImg = (e) => {
		setFile(e.target.files[0]);
	};

	return (
		<>
			<div className='container mt-3'>
				<h1>Upload Image</h1>

				<Form className='mt-4'>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type='text'
							name='fname'
							onChange={setData}
							placeholder=''
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Select Image</Form.Label>
						<Form.Control
							type='file'
							name='photo'
							onChange={setImg}
							placeholder=''
						/>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
		</>
	);
};

export default Register;
