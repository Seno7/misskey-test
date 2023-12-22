import axios from 'axios'
import { Button, CardBody, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const data = {
	i: 'nxYn7BizhZ2iEYKsfmRqHHI3z0Z0XjHn',
	noteId: ''
}

export default function Note(props) {
	const id = props.content.id

	function deleteNote() {
		data.noteId = id
		axios.post('/notes/delete', data, props.config)
	}

	return (
		<Card>
			<Container>
				<CardBody>
					<Row>
						<CardTitle>{props.content.user.username}</CardTitle>
					</Row>
					<Row>
						<Col xs={8}>
							<CardText className='ps-3'>{props.content.text}</CardText>
						</Col>
						<Col className='align-self-end'>
							<div className='text-end pe-0'>
								<Button variant='outline-danger' onClick={deleteNote}>削除</Button>
							</div>
						</Col>
					</Row>
				</CardBody>
			</Container>
		</Card >
	)
}    
