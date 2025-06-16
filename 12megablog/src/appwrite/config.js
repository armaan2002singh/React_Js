import conf from "../conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId); 

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  // if i want to add post then how it is possible.
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, // i am using slug as document id
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
      // which value will be passed in it.
    } catch (error) {
      console.log("appwrite servie :: create Post", error);
    }
  }

  //update document->
  async updatePost(slug, {title, content, featuredImage, status}){
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,{
          title,
          content,
          featuredImage,
          status
        }
      )
    } catch (error) {
      console.log("Error in update post of config.js :: ", error);
      
    }
  }
}
const service = new Service();
export default service;
