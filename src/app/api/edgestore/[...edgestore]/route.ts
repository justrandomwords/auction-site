import { initEdgeStore } from '@edgestore/server'
import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/app';

const es = initEdgeStore.create();

const edgeStoreRouter = es.router({
    AuctionsImages: es.imageBucket(),
})

const hander = createEdgeStoreNextHandler({
    router: edgeStoreRouter,
})

export { hander as GET, hander as POST }

export type EdgeStoreRouter = typeof edgeStoreRouter;