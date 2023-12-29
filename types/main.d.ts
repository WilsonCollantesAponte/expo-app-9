interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  headquarter: string;
  cycle: string;
  carrer: string;
  Access: Access;
  postDetail: Array<postDetail>;
}

interface Access {
  id: string;
  about: boolean;
  posts: boolean;
  dashboardUsers: boolean;
  dashboardPosts: boolean;
  idUser: string;
  User: User;
}

interface postScope {
  id: string;
  architecture: boolean;
  industrialEngineering: boolean;
  systemsEngineering: boolean;
  civilEngineering: boolean;
  idPost: string;
  Post: Post;
}

interface Post {
  id: string;
  title: string;
  description: string;
  image: any;
  postDetail: Array<postDetail>;
  // postDetail: postDetail[];
  postScope: postScope;
}

interface postDetail {
  idUser: string;
  User: User;
  idPost: string;
  Post: Post;
  iLove: boolean;
  iLike: boolean;
}
