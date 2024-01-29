export class User{
    constructor(userName, userFriends, userAddress = ''){
        this.userName = userName;
        this.userFriends = userFriends;
        this.userAddress = userAddress;
    }

    addFriend(user){
        this.usersFriend.push(user);
    }

    acceptFriendRequest(user){
        //To do
    }

    sendFriendRequest(user){
        //To do
    }

    removeFriend(user){
        //To do
    }

    set address(userAddress){
        this.userAddress = userAddress;
    }

    get address(){
        return this.userAddress;
    }
};