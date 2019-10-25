[http://vueblog.lcainswebdeveloper.co.uk]

# Lew's Blog

- clone the https://github.com/lcainswebdeveloper/blogapi repo, follow those instructions and make sure tests are passing.
- clone this repo and cd into it (let's assume this will be called 'dummyblog')


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```
- Save src/env.js.bak as src/env.js and amend the relevant urls as per your project.
```
src/env.js

export default {
    blogApiUrl(){
        if(window.location.origin == 'http://dummyblog.test:8080'){
            return 'http://your-local-blog-api-url/api/'; //ie http://dummyblogapi.test/api/
        }else{
            //declare your live api url
            return 'http://your-live-blog-api-url/api/';
        }
    }
}
```
- Save vue.config.js.bak as vue.config.js and amend the allowedHosts property to your url ie .dummyblog.test (this is needed so that we can make api calls)
```
vue.config.js

module.exports = {
    devServer: {
        allowedHosts: [
            '.dummyblog.test'
        ]
    }
}
```
- open http://dummyblog.test:8080 in your browser (amend the port to whatever the console implies if relevant)

### Compiles and minifies for production
```
yarn run build
```

### Production notes
- Make sure your host file points to the /dist directory
- Add the following .htaccess into the dist directory (ensure mod rewrite is also enabled)

```
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews
    </IfModule>

    RewriteEngine On

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Handle Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [L]

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
</IfModule>
```
