class Github {
  constructor() {
     this.client_id = '089ec4c4644fe64eba1d';
     this.client_secret = 'd445f273e843104475e529f21a8753337672db44';
     this.repos_count = 5;
     this.repos_sort = `created: asc`;
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  } 
}