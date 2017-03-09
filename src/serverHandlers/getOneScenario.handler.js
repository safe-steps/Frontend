import requester from 'superagent';

export default function(req, res) {
	requester.get('https://api.zenow.io/v1/set/58c0b928e486560018d02e3d/item/' + req.params.id + '?apikey=' + process.env.API_KEY)
		.end((err, result) => {
			res.send(result.body.items.read[0]);
		})
}
