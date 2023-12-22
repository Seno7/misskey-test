import { Button, Container, Stack } from 'react-bootstrap'
import Note from './Note.js'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const data = {
	i: 'nxYn7BizhZ2iEYKsfmRqHHI3z0Z0XjHn',
	limit: 5
}

export default function Timeline(props) {
	const [timeline, setTimeline] = useState([])

	useEffect(updateTimeline, [timeline])

	function updateTimeline() {
		axios.post('/notes', data, props.config)
			.then(response => {
				const notes = response.data
				const newTimeline = new Array(notes.length)
				for (let i = notes.length - 1; i >= 0; i--) newTimeline[i] = <Note content={notes[i]} config={props.config} />
				setTimeline(newTimeline)
			})
	}
	return (
		<Container className='bg-light rounded p-3'>
			<div className='pt-3'><b>タイムライン</b>&emsp;<Button variant='outline-secondary' onClick={updateTimeline}>更新</Button></div>
			<hr></hr>
			<Stack gap={1}>
				{timeline}
			</Stack>
		</Container>
	)
}
