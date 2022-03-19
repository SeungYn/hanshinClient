export default class PackageService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async getNotTakePackages() {
    return this.http.fetch(`/packages`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
  }

  async updateTakePackages(name, position, selectedPackages) {
    const packages = selectedPackages.map((i) => i.boxId);
    return this.http.fetch(`/packages/take`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify({
        boxId: packages,
        name,
        position,
      }),
    });
  }

  async createPackages(packagesList) {
    return this.http.fetch(`/packages`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({
        packages: packagesList,
      }),
    });
  }
}
