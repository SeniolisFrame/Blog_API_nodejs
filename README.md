# Blog_API_nodejs

## Install :
### npm install

## ADD File :
#### .env file
###### ACCESS_TOKEN_SECRET = 'Your Access Token'
###### DB_URI = 'MongoDB URI'

## Start :
### npm start

## URL :
### /user
###### /user/register                     -> register id
###### /user/login                        -> login
###### /user/getProfile                   -> get your profile (require jwt)
###### /user/viewProfile/:id              -> get other profile
### /blog
###### /blog/getAllBlog                   -> get all blog
###### /blog/getBlog/:id                  -> get 1 blog (id)
###### /blog/postBlog                     -> get post your blog
###### /blog/commentBlog                  -> comment blog (require blog_id)
