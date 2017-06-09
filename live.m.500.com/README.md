#开发规范
##一. 源码管理
###①分支管理
1. 远程仓库只保留两个分支（master（主干分支）， release（正式版本分支， 发布前提交到svn上的分支））
2. 每天上下班都pull下远程分支
~~~
git checkout master
git pull origin master
~~~
3. 合并分支前都运行pull拉取最新代码避免冲突
~~~
git checkout master
git pull origin master
git merge XXX(本地分支名)
~~~
4. 开发新功能本地创建分支， 分支名规范： feature-xxx(xxx 为功能名称的简称)
~~~
git checkout -b feature-xxx
~~~
5. 正常情况下自己开发功能不需要提交到远程仓库， 但是有时候要分享代码给别人看， 避免不了提交自己的本地分支到远程仓库， 使用完， 合并到主分支后记得一定要删除远程里面的多余分支。运行命令
~~~
git push origin :feature-xxx
~~~
###②代码规范管理
1. 所有js都必须遵循eslint定义的规则（很重要）
2. 每次提交代码前， 都会自动监测代码规范性， 如果有不规范的地方， 会阻止提交
3. 开发过程中，可以随时运行 npm run lint 对代码进行监测， 运行npm run lint-fix 可以自动帮你修复大部分代码规范性的问题
4. eslint可以配合ide进行代码检查， 可以帮助你快速查看不规范的地方

###③发布管理
1. 正式发布（预发布）代码前， 执行
~~~
git checkout release
git pull origin release
git merge master
git add .(有冲突的时候执行) 
git commit -m "merge master" (有冲突的时候执行) 
git push origin release
~~~
2. 每次push release分支上的东西都会在远程仓库中执行npm run build,并且把release分支里面的内容还有build后的东西一并提交到svn服务器上
##二. 模块管理
###① 每次需求下来的时候， 如果和之前做的功能关系不大的时候， 就新加一个模块， 模块需要在 build/webpack.base.config.js 里面配置， 需要加两块地方， 一个是entry ， 另外一个是 plugins里面
###②  新增模块的时候要在src目录下新建一个目录， 目录里面放置此模块的所有代码，并安装步骤①修改webpack.base.config.js




