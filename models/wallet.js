class Wallet {
    constructor(user_id, credit_cardID, amount = 500) {
        this.user_id = user_id;
        this.credit_cardID = credit_cardID;
        this.amount = amount
    }

    deposit(user, amount) {
        if (amount > 0) {
            this.amount += amount;
        } else {
            alert('Invalid Amount')
        }
    }

    withdraw(user, amount) {
        if (amount < 0) {
            this.amount += amount;
        } else {
            alert('Invalid Amount')
        }
    }


}