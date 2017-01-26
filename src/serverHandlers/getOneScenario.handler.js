export default function(req, res) {
	res.send({
		_id: 1,
		title: "Test Scenario",
		description: "This Scenario is only for testing",
		steps: [
			{//0
				type: "narrator",
				goTo: 1,
				text: "Welcome to the Test Scenario! Please press next."
			},
			{//1
				type: "dialog",
				goTo: 2,
				text: "ayyyyy"
			},
			{//2
				type: "choice",
				choices: [
					{
						text: "lmao",
						goTo: 3,
						doneWell: "Noice(ayyyyy)",
						canImprove: null
					},
					{
						text: "rofl",
						goTo: 4,
						doneWell: null,
						canImprove: "Get yo memes together yo(ayyyyy)"
					}
				]
			},
			{//3
				type: "dialog",
				goTo: 5,
				text: "Bird bird"
			},
			{//4
				type: "dialog",
				goTo: 6,
				text: "What's the good word?"
			},
			{//5
				type: "choice",
				choices: [
					{
						text: "Is a nerd?",
						goTo: 7,
						doneWell: null,
						canImprove: "a nerd? wat?(bird bird)"
					},
					{
						
						text: "Is the word?",
						goTo: 7,
						doneWell: "Yes it is, well done(bird bird)",
						canImprove: null
					}
				]
			},
			{//6
				type: "choice",
				choices: [
					{
						text: "THWG",
						goTo: 7,
						doneWell: "Piss on em!!!",
						canImprove: null
					},
					{
						text: "TMNT",
						goTo: 7,
						doneWell: null,
						canImprove: "SHAME ON YOU, GET SOME SCHOOL SPIRIT PLZ"
					}
				]
			},
			{//7
				type: "narrator",
				goTo: null,
				text: "Thank you for completing the Test Scenario!"
			}
		]
	})
}