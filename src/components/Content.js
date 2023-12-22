import { Col, Container, Row } from "react-bootstrap"
import Timeline from "./Timeline"
import CreateNote from "./CreateNote"

const config = {
	headers: {
		'Content-Type': 'application/json',
	},
	baseURL: 'http://192.168.13.5:30080/api/',
}

export default function Content() {
	return (
		<Container>
			<Row>
				<Col xs={8}>
					<Timeline config={config}></Timeline>
				</Col>
				<Col>
					<CreateNote config={config}></CreateNote>
				</Col>
			</Row>
		</Container>
	)
}
