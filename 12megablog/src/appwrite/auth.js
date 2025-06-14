//for authentication.
import conf from '../conf/conf'

import {Client, Account, ID} from 'appwrite'
export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
        // after this will create the account.
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            //use unique(); method to create an ID.
            if (userAccount) {
                //call another method.
                return this.login({email, password})
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
            
        }    
    }

    //login
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }
    //is logged in
    async getCurrentUser (){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser::  error" , error);
            
        }
        return null;
    }
    //log-out
    async logout(){
        try {
            this.account.deleteSessions();// for multiple sessions
        } catch (error) {
            console.log("logout error::", error);
            
        }
    }
}

const authService =  new AuthService();
export default authService
//created an async serivice.