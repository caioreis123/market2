const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {
    // Create a new user called `Alice`
    const newUser = await prisma.createUser({ name: 'Caio' })
    console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

    // //delete the user with this id
    await prisma.deleteUser({ id: "cjvnxld6o71680b35z5t93i77"})

    //add an email to the caio user
    await prisma.updateUser({
        where: { id: 'cjvy3u3hq50co0b428pj387k7' },
        data: { email: 'caioviski@devcaio.com' },
    })

    // Read all users from the database and print them to the console
    const allUsers = await prisma.users()
    console.log(allUsers)

    //query all poster by a user
    const postsByUser = await prisma.user({ email: 'bob@prisma.io' }).posts()
    console.log(`All posts by that user: ${JSON.stringify(postsByUser)}`)
}

main().catch(e => console.error(e))