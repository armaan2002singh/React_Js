const conf = {
  appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),

  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),

  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

// used string to confime it as a string because it accessed in the format of string. Just for the quranty that the will will be in string.
// here we will export no. of key value pairs.
export default conf;
