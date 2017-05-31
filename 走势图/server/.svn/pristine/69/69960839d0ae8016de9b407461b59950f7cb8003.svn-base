#开发规范
    
##如何使用git管理源码
~~~
svn info http://svn.500wan.com/wap/wapcode/trunk/php/html_ssr/server (查看最新版本)

//clone包含最近10次提交信息, 比如最新版本号是54223， 那么
git svn clone -r54213:HEAD http://svn.500wan.com/wap/wapcode/trunk/php/html_ssr/server 

cd server
yarn(不建议使用npm install， yarn更先进)

创建本地work分支
git checkout -b work

切换到主分支
git checkout master

获取最新svn更新
git svn rebase


合并分支
git merge work


同步本地修改到svn
git svn dcommit
~~~

##开发规范
1. 充分利用页面路由
2. 涉及到Dom操作全部封装到指令里面或者组件里面
3. 尽量不要使用$emit(), $on()
4. 每次watch的变量的时候， 此变量必须事先声明过了的
5. 不要使用 vue.set()






##线上初始化
* 安装node 6.X npm3.X以上
* 进入到server 目录下运行npm install
* 运行npm run build 编译项目
* 确保 /data/waplogs/html_ssr 目录存在
* 运行npm run fstart



##线上日常更新
* svn更新项目
* 运行npm run buildAndRestart


##本地开发

* 安装node 6.X npm3.X以上
* 导入server项目到ide（可选）；
* 进入到server 目录下运行npm install
* 运行npm run dev
* 打开浏览器 输入 [http://127.0.0.1:3003/datachart/qyh/index.html](http://127.0.0.1:3003/datachart/qyh/index.html) /datachart/qyh/index.html这个地址是path.json里面的一条记录的uri地址





**注意， 所有生成的文件统一放到了 static目录下面， static目录是每次运行时候自动生成的目录，里面包含生成的html 还有js， 不用提交到svn中了**