const { SiteClient } = require('datocms-client')


async function updateRequest(request, response) {
    if (request.method === 'POST') {
        const TOKEN = 'your DatoCMS full acess api token'

        const client = new SiteClient(TOKEN)

        const update = await client.items.update(request.body.id, {
            usertimer: request.body.usertimer
        }).then(console.log('salvou')).catch((error) => {
            console.error(error); console.log(request.body[1])
        });

        response.json({
            dados: "algum dado qualquer",
            update: update
        })
    }
}

export default updateRequest
