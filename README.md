meteor-trello
=============


###### Boards View

![alt tag](http://metrello.yasaricli.com/img/boards.png)

###### Board list View

![alt tag](http://metrello.yasaricli.com/img/lists.png)

##### install nodejs 
    $ wget http://nodejs.org/dist/v0.10.24/node-v0.10.24.tar.gz
    $ tar -xvf node-v0.10.24.tar.gz
    $ cd node-v0.10.24
    $ ./configure && make install clean


##### install meteor and meteorite
    $ curl https://install.meteor.com/ | sh
    $ npm install -g meteorite
    
##### meteor-trello clone and run
    $ git clone https://github.com/yasaricli/meteor-trello.git
    $ cd meteor-trello
    $ meteor
    
    
###### use mongodb Production
    $ export MONGO_URL=mongodb://localhost:27017/dbname
    $ meteor --production 

    

