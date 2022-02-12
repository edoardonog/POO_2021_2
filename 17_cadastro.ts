abstract class Account {
    balance: number = 0
    clientId: string
    id: number
    type: string

    constructor(id:number, client:string) {
        this.clientId = client
        this.id = id
    }

    deposit(value: number){
        this.balance -= value
    }

    abstract monthlyUpdate()

    transfer(other: Account, value:number){
        if(other.balance < value){
            console.log("kkkk, dois pobre")
        } else if (other.balance >=value){
            this.balance += value
        }
    }

    withdraw(value:number){
        if(this.balance < value){
            console.log("ERRO: Tu tá pobre, economiza!")
        } else if (this.balance >= value){
            this.balance -= value
        }
    }

    getBalance(){
        return this.balance
    }

    getClient(){
        return this.clientId
    }

    getId(){
        return this.id
    }

    getType(){
        return this.type
    }
}

class SavingsAccount extends Account {
    type:string = "Conta Poupança"

    constructor(id:number, client:string){
        super(id, client)
    }

    monthlyUpdate(){
        this.balance += 20;
    }
}

class CheckingAccount extends Account {
    type:string = "Conta Corrente"

    constructor(id:number, client:string){
        super(id, client)
    }

    monthlyUpdate(){
        this.balance -= 20;
    }
}


class Client{
    accounts: Account[]
    clientId: string

    constructor(clientId:string) {
        this.clientId = clientId
        this.accounts = []
    }

    addAccount(account:Account){
        this.accounts.push(account)
    }

    getAccounts(){
        return[...this.accounts.values()]
    }

    setAccounts(accounts: Account[]){
        this.accounts = accounts
    }

    getClient(){
        return this.clientId
    }

    setClient(client: string){
        return this.clientId = client
    }

    toString(){
        return `${this.clientId} [${this.getAccounts()}]`;
    }
}

class BankAgecy {
    accounts: Map<number,Account>
    clients: Map <string, Client>
    nextAccountId: number

    constructor(){
        this.accounts = new Map <number, Account> ()
        this.clients = new Map <string, Client> ()
        this.nextAccountId = this.nextAccountId
    }

    addClient(clientId:string){
        if(!this.clients.has(clientId)){
            this.clients.set(clientId, new Client(clientId));

            let client = this.clients.get(clientId);
            
            if(client !== undefined){
                let corrente = new CheckingAccount(this.nextAccountId, clientId);
                let poupanca = new SavingsAccount(this.nextAccountId + 1, clientId);


                client.addAccount(corrente);
                client.addAccount(poupanca);

                this.accounts.set(corrente.getId(), corrente);
                this.accounts.set(poupanca.getId(), poupanca);
            }
        } else {
            return;
        }
    }
     
    deposit(idConta: number, value: number){
        if(this.accounts.has(idConta)){
            let conta = this.accounts.get(idConta);
            if(conta !== undefined){
                conta.deposit(value);
            }
        } else {
            console.log("Essa conta não existe");
        }
    }

    monthlyUpdate(){
        for(let contas of this.accounts.values()){
            contas.monthlyUpdate();
        }
    }

    tranfer(contaDe:number, contaPara:number, value:number){
        if(this.accounts.has(contaDe)){
            if(this.accounts.has(contaPara)){
                let from = this.accounts.get(contaDe);
                let to = this.accounts.get(contaPara);
                if(from !== undefined && to !== undefined){
                    from.transfer(to, value);
                }
            } else {
                console.log("Essa conta não existe");
            }
        }  
    }

    withdraw(idConta: number, value: number){
        if(this.accounts.has(idConta)){
            let conta = this.accounts.get(idConta);
            if(conta !== undefined){
                conta.withdraw(value);
            }
        } else {
            console.log("Essa conta não existe");
        }
    }

    toString(){
        return `CLIENTS:\n    ${[...this.clients.values()].join('\n    ')}\n\nACCOUNTS:\n   ${[...this.accounts.values()].join('\n   ')} \n`
    }
}
