import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

const data = {
	i: 'nxYn7BizhZ2iEYKsfmRqHHI3z0Z0XjHn',
	text: ''
}

export default function CreateNote(props) {
	const [newNote, setNewNote] = useState('')

	function createNote() {
		if (newNote == '') return
		data.text = newNote
		axios.post('/notes/create', data, props.config).then(setNewNote(''))
	}

	return (
		<Container className='bg-light rounded p-3'>
			<div className='pt-3'><b>ノートを作成</b></div>
			<hr></hr>
			<Form>
				<FormGroup className="mb-3">
					<FormLabel>投稿内容</FormLabel>
					<FormControl as="textarea" rows={5} value={newNote} onChange={e => setNewNote(e.target.value)} />
					<div className='mt-3 text-end'>
						<Button variant='outline-primary' onClick={createNote}>送信</Button>
					</div>
				</FormGroup>
			</Form>
		</Container>
	)
}
