export async function POST(req) {
    try {
        const body = await req.json();

        const response = await fetch(
            "https://formsubmit.co/ajax/junaidsalam639@gmail.com",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        const data = await response.json();

        return Response.json(data, {
            status: 200,
        });
    } catch (error) {
        return Response.json(
            { error: error },
            { status: 500 }
        );
    }
}

