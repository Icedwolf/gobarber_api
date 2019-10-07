##yarn
yarn init -y
yarn add express
yarn add sucrase nodemon -D
yarn add eslint
yarn eslint --init
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
yarn eslint --fix src --ext .js
yarn add sequelize
yarn add sequelize-cli -D
yarn add pg pg-hstore
yarn sequelize migration:create --name=create-users
yarn add bcryptjs
#jwt
yarn add jsonwebtoken
#promesify from 'util' => convert callback to async/await
yarn add yup
#multipart/form data
yarn add multer
#tmp > uploads
#node crypto to generate uniq name
#model associate belongsTo user <- files
#index database
#routes -> controller -> insomnia
#controller -> include (relashionships)
#sequelize virtual to return formated data
#app.js express.static
yarn add date-fns@next # date validattions
docker run --name mongobarber -p 27017:27017 -d -t mongo # -d detached
yarn install mongoose # database > index
yarn add nodemailer #config > mail.js
#app > lib
#template engines templates with node vars
#handlebars
yarn add express-handlebars nodemailer-express-handlebars # -> lib/mail
#app>views>template
#redir non relational database for key => values with high performance and scability
docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
yarn add bee-queue #simple for a more complete use kue
#lib -> Queue.js | app -> Jobs => jobs -> queue
#config -> redis.js
#src/queue.js
#package => script => queue (transpiler for queue [not running in the same instance of the server])
#sentryio -> express 
yarn add @sentry/node@5.6.2 # config/sentry (dsn) -> sentryConfig -> app
yarn add express-async-errors # -> app import 
yarn add youch #better developer errors