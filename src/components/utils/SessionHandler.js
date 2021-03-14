const keyName = "SESSION";

export default class SessionManager {

    static saveToken(responseData){
        localStorage.setItem(keyName,JSON.stringify(responseData))
    }

    static getToken(){
        return JSON.parse(localStorage.getItem(keyName))?.access_token
    }

    static getPhotoUrl(){
        return JSON.parse(localStorage.getItem(keyName))?.user.photoURL
    }
    static deleteSession(){
        localStorage.setItem(keyName,null);
    }
}