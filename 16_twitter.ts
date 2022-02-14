class User {
    username: string
    inbox: Inbox
    followers: Map <string, User>
    following: Map <string, User>

    constructor(username: string){
        this.username = username
        this.inbox = new Inbox()
        this.followers = new Map <string, User>()
        this.following = new Map <string, User>()
    }

    follow(other:User){
        if(other.username != this.username){
            if(!this.following.has(other.username)){
                this.following.set(other.username, other)
                other.followers.set(this.username, this)
            }
        }
    }

    getInbox(): Inbox{
        return this.inbox
    }

    sendTweet(tweet: Tweet) {
        this.inbox.storeInTimeline(tweet)
        this.inbox.storeMyTweets(tweet)
        this.inbox
    }

toString(): string {
        return `Usuário: ${this.username} \nSeguidores: [${[...this.followers.keys()].join(", ")}] | Seguidos: [${[...this.following.keys()].join(", ")}]\n---------------\n${this.inbox}`
    }
    }

class Inbox {
    timeline: Map <number, Tweet>
    myTweets: Map <number, Tweet>

    constructor(){
        this.timeline = new Map <number, Tweet>()
        this.myTweets = new Map <number, Tweet>()
    }

    storeInTimeline(tweet: Tweet){
        this.timeline.set(tweet.getId(), tweet)
    }

    storeMyTweets(tweet: Tweet){
        this.myTweets.set(tweet.getId(), tweet)
    }

    getTimeline(): Tweet[]{
        let tweets: Tweet[] = [...this.timeline.values()]
        return tweets
    }

    toString(): string {        
        return `Timeline\n${this.getTimeline().join('\n')}`
    }
}

class Controller {
    nextIDTweet: number
    users: Map<string, User>
    tweets: Map<number, Tweet>

    constructor(){
        this.nextIDTweet = 0
        this.users = new Map<string, User>()
        this.tweets = new Map<number, Tweet>()
    }

    addUser(username:string) {
        if(!this.users.has(username)){
            this.users.set(username, new User(username)) 
        }else{
            throw new Error("username em uso")
        }
    }

    getUser(username:string) {
        if(this.users.has(username)){
            return this.users.get(username)!
        }else{
            throw new Error("Usuário ão existe")
        }
    }

    toString(): string {
        return `${[...this.users.values()].join('\n \n')}`
    }

    private createTweet(sender: string, msg:string): Tweet{
        let tweet: Tweet = new Tweet(this.nextIDTweet, sender, msg)

        this.tweets.set(this.nextIDTweet, tweet)

        return tweet
    }

    sendTweet(username:string, msg:string){
        let user: User = this.getUser(username)
        let tweet:Tweet = this.createTweet(username,msg)
        let rt: Tweet= this.createTweet(username,msg)
    }
}

class Tweet {
    id: number
    username: string
    msg: string
    likes: string []
    rt: Tweet []

    constructor(id: number, username: string, msg: string){
        this.id = id
        this.username = username
        this.msg = msg
        this.likes = []
        this.rt = []
    }

    getId() {
        return this.id
    }

    getUsername() {
        return this.username
    }

    getMsg() {
        return this.msg
    }

    toString():string {return}
}
