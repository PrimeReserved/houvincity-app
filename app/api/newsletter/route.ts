export async function POST() {
    const res = await fetch('', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({ })
    })

    const data = await res.json()

    return Response.json(data)
}