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
            throw new Error("Username já está sendo utilizado")
        }
    }

    private createTweet(sender: string, msg:string): Tweet{
        let tweet: Tweet = new Tweet(this.nextIDTweet, sender, msg)

        this.tweets.set(this.nextIDTweet, tweet)

        return tweet
    }

    getUser(username:string) {
        if(this.users.has(username)){
            return this.users.get(username)!
        }else{
            throw new Error("Usuário ão existe")
        }
    }

    sendTweet(username:string, msg:string){
        let user: User = this.getUser(username)
        let tweet:Tweet = this.createTweet(username,msg)
    }

    sendRT(username:string, twId:number, rtMsg:string){
        let user: User = this.getUser(username)
        let tweet: Tweet = user.getInbox().getTweet(twId)
        let retweet: Tweet = this.createTweet(user.username, rtMsg)

        retweet.setRT(tweet)
        user.sendTweet(retweet)
    }

    toString(): string {
        return `${[...this.users.values()].join('\n \n')}`
    }
}

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

    sendTweet(tweet: Tweet) {
        this.inbox.storeInTimeline(tweet)
        this.inbox.storeMyTweets(tweet)
    }

    unfollow(other:string){
        if (this.following.has(other)){
            this.following.get(other)
            this.following.delete(other)
            console.log("Você deixou de seguir este usuário");
        }
        else{
            console.log("Usuario não existe");
        }
    }

    getInbox(): Inbox{
        return this.inbox
    }

    toString(): string {
        return `Usuário: ${this.username} \nSeguidores: [${[...this.followers.keys()].join(", ")}] | Seguidos: [${[...this.following.keys()].join(", ")}]\n---------------\n${this.inbox}`
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

    getSender() {
        return this.username
    }

    getMsg() {
        return this.msg
    }

    like(username: string){
        this.likes.push(username)
    }

    getLikes(): string[] {
        return this.likes
    }

    setRT(tw:Tweet){
        this.rt = tw
    }

    toString(): string {
        let tweet: string = `${this.id}:${this.username} -> (${this.msg}) [${this.getLikes().join(", ")}]`

        if(this.rt != null){
            tweet += `\n    ${this.rt}`
        }

        return tweet
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

    getTimeline(): Tweet[]{
        let tweets: Tweet[] = [...this.timeline.values()]
        return tweets
    }

    storeMyTweets(tweet: Tweet){
        this.myTweets.set(tweet.getId(), tweet)
    }

    getTweet(id: number): Tweet {
        if(this.timeline.has(id)){
            return this.timeline.get(id)!
        }else{
            throw new Error("Tweet não existe")
        }
    }

    toString(): string {        
        return `Timeline\n${this.getTimeline().join('\n')}`
    }
}
