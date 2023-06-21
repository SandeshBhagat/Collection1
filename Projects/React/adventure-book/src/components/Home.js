import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div className='container mt-2'>
				<h1 className='text-center mt-2'>MERN</h1>
				<div className='text-end'>
					<Button variant='primary'>
						<NavLink to='/register' className='text-decoration-none text-light'>
							Add User
						</NavLink>
					</Button>
				</div>

				<div className='row d-flex justify-content-between align-items-center mt-5'>
					<Card style={{ width: '22rem', height: '18rem' }} className='mb-3'>
						<Card.Img
							variant='top'
							style={{ width: '100px', textAlign: 'center', margin: 'auto' }}
							src='/logo512.png'
							className='mt-2'
						/>
						<Card.Body className='text-center'>
							<Card.Title>User Name: Sandesh</Card.Title>
							<Card.Text>Date Added: 12/08/2022</Card.Text>
							<Button variant='danger' className='ps-5 pe-5'>
								delete
							</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: '22rem', height: '18rem' }} className='mb-3'>
						<Card.Img
							variant='top'
							style={{ width: '100px', textAlign: 'center', margin: 'auto' }}
							src='/logo512.png'
							className='mt-2'
						/>
						<Card.Body className='text-center'>
							<Card.Title>User Name: Sandesh</Card.Title>
							<Card.Text>Date Added: 12/08/2022</Card.Text>
							<Button variant='danger' className='ps-5 pe-5'>
								delete
							</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: '22rem', height: '18rem' }} className='mb-3'>
						<Card.Img
							variant='top'
							style={{ width: '100px', textAlign: 'center', margin: 'auto' }}
							src='/logo512.png'
							className='mt-2'
						/>
						<Card.Body className='text-center'>
							<Card.Title>User Name: Sandesh</Card.Title>
							<Card.Text>Date Added: 12/08/2022</Card.Text>
							<Button variant='danger' className='ps-5 pe-5'>
								delete
							</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
		</>
	);
};

export default Home;
