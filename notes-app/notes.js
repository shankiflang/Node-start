const fs = require('fs')
const chalk = require('chalk')

const readNote = (title) => {
	const notes = loadNotes()

	const note = notes.find((note) => note.title === title)
	if (note) {
		console.log(chalk.green('Title : ' + note.title))
		console.log(chalk.green('Body : ' + note.body))
	} else {
		console.log(chalk.red.inverse('No note'))
	}
	
}

const listNotes = () => {
	const notes = loadNotes()

	console.log(chalk.inverse('Your notes :'))
	notes.forEach((note) => {
		console.log(chalk.green(note.title))
	})

}

const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateNote = notes.find((note) => note.title === title)

	if (!duplicateNote) {
		notes.push({
			title,
			body
		})
		saveNotes(notes)
		console.log(chalk.green.inverse('New note added!'))
	} else {
		console.log(chalk.red.inverse('Note title taken!'))
	}
}

const removeNote = (title) => {
	const notes = loadNotes()

	const newNotes = notes.filter((note) => note.title !== title)

	if (notes.length > newNotes.length) {
		console.log(chalk.green.inverse('Note removed!'))
		saveNotes(newNotes)
	} else {
		console.log(chalk.red.inverse('No note found!'))
	}

}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	} catch (e) {
		return []
	}
}

module.exports = {
	listNotes,
	readNote,
	addNote,
	removeNote
}