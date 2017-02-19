export default function(req, res) {
	res.send({
		_id: 1,
		selectedStep: 0,
		  title: 'Test Scenario',
		  description: 'This Scenario is only for testing',
		  steps: [
		    {// 0
		      type: 'dialog',
		      speaker: 'narrator',
		      goTo: 1,
		      text: 'Welcome to the Test Scenario! Please press next.'
		    },
		    {// 1
		      type: 'dialog',
		      speaker: 'doctor',
		      goTo: 2,
		      text: 'Question'
		    },
		    {// 2
		      type: 'choice',
		      choices: [
		        {
		          text: 'yes',
		          goTo: 3,
		          doneWell: 'Very Good',
		          canImprove: null
		        },
		        {
		          text: 'no',
		          goTo: 4,
		          doneWell: null,
		          canImprove: 'Not correct'
		        }
		      ]
		    },
		    {// 3
		      type: 'dialog',
		      speaker: 'doctor',
		      goTo: 5,
		      text: 'How are you?'
		    },
		    {// 4
		      type: 'dialog',
		      speaker: 'doctor',
		      goTo: 6,
		      text: 'Where are you from?'
		    },
		    {// 5
		      type: 'choice',
		      choices: [
		        {
		          text: 'Great!',
		          goTo: 7,
		          doneWell: null,
		          canImprove: 'No further explaination?'
		        },
		        {
		          text: 'Not doing to well.',
		          goTo: 7,
		          doneWell: 'Honest',
		          canImprove: null
		        }
		      ]
		    },
		    {// 6
		      type: 'choice',
		      choices: [
		        {
		          text: 'Atlanta',
		          goTo: 7,
		          doneWell: 'Love me some ATL',
		          canImprove: null
		        },
		        {
		          text: 'Nashvegas',
		          goTo: 7,
		          doneWell: null,
		          canImprove: 'But you are in ATL now?'
		        }
		      ]
		    },
		    {// 7
		      type: 'dialog',
		      speaker: 'narrator',
		      goTo: null,
		      text: 'Thank you for completing the Test Scenario!'
		    }
		  ]
	})
}