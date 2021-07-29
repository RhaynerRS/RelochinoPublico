const { SiteClient } = require('datocms-client')


export default async function recebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = 'your DatoCMS full acess api token'

        const client = new SiteClient(TOKEN)

        const record = await client.items.create({
            itemType: '1010860',
            ...request.body,
            /*title: dadosDoForm.get('title'),
            imageurl: dadosDoForm.get('image'),
            creatorslug:githubUser*/
        })

        response.json({
            dados: "algum dado qualquer",
            record: record,
        })
    }
}
