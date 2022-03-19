export default class PackageService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async getNotTakePackages() {
    return this.http.fetch(`/`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
  }
}
