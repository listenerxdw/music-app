import prisma from '../../lib/prisma'
import { validateRoute } from '../../lib/auth'

// client's fetch request is sent to Prisma client, then prisma perform database query
export default validateRoute(async (req, res, user) => {
  const playlists = await prisma.playlist.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      name: 'asc',
    },
  })

  res.json(playlists)
})
