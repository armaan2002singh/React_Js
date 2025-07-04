import conf from "../conf/conf";
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

  async createPost({
    title,
    slug,
    content,
    featuredimage,
    status = "active",
    userid,
  }) {
    try {
      // Validate required fields
      if (!title || !content || !featuredimage || !userid) {
        throw new Error(
          "Missing required fields: title, content, featuredimage, or userid."
        );
      }

      // Build the data object
      const postData = {
        title,
        content,
        featuredimage,
        status,
        userid,
      };

      // Log payload for debugging
      console.log("Creating post with payload:", postData);

      // Create document
      const response = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug || ID.unique(),
        postData
      );

      console.log("Post created successfully:", response);
      return response;
    } catch (error) {
      console.error("❌ Appwrite createPost error:", error.message);
      throw error;
    }
  }
  //update document->
  async updatePost(slug, { title, content, featuredimage, status }) {
    try {
      const data = {
        title,
        content,
        status,
      };

      if (featuredimage) {
        data.featuredimage = featuredimage;
      }

      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        data
      );
    } catch (error) {
      console.error("Error in updatePost:", error.message);
      throw error;
    }
  }

  //delete post.
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("appwrite service :: delete post ::", error);

      return false;
    }
  }

  //get document
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("error in getpost ::", error);
    }
  }

  // all documents -- will use queries to filter the doc's.
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
        //100, // pagination etc... NOTE -- need to study it in advance.
      );
    } catch (error) {
      console.log("error in the getPosts ::", error);
      return false;
    }
  }

  //file upload services

  async uploadFile(file) {
    //here avoid the mistake of giving the name of the file, because here will give the blob of the file.
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("appwrite service error ::in fileUpload :: ", error);
    }
  }

  //delete file
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("error in appwrite services :: delete file :: ", error);
      return false;
    }
  }

  //file preview -- in this their is no promise of this so we will not use async await and it is genuinelly fast
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}
const service = new Service();
export default service;
