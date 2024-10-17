const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== 'MovieCatalogue-V1')
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {

  },

  async _openCache() {
    return caches.open('MovieCatalogue-V1');
  },
};

export default CacheHelper;