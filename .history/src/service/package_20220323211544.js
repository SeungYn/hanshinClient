export default class PackageService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async getNotTakePackages(kind) {
    console.log(kind);
    const query = kind ? `?kind=${kind} ` : '';
    return this.http.fetch(`/packages${query}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
  }

  async getNotTakePackagesOption(category) {
    return this.http.fetch(`/packages=${category}`, {
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
    console.log(nowDay);
    return this.http.fetch(`/packages`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({
        packages: packagesList,
        nowDay,
      }),
    });
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
