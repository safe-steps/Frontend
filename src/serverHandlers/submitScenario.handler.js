import requester from 'superagent';

export default function(req, res) {
	requester.post('https://api.zenow.io/v1/set/58c0b928e486560018d02e3d/item?apikey=' + process.env.API_KEY)
    .send([ req.body ])
		.end((err, result) => {
			if (!err) {
        res.send();
      } else {
        res.status(500).send();
      }
		})
}
