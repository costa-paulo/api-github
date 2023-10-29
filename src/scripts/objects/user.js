const user = {
    avatarUrl: '',
    name: '',
    userName: '',
    bio: '',
    followers:'',
    following:'',
    repositories: [],
    events: [],

    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.userName = gitHubUser.login
        this.bio = gitHubUser.bio
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },

    setRepositories(repositories){
        this.repositories = repositories
    },

    setEvents(events){
        this.events = events
    },
}

export {user}