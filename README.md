# 蓝鲸基础框架使用说明

开发框架2.0使用说明：https://docs.bk.tencent.com/blueapps/USAGE.html


# 嘉为定制版使用说明

## 开发使用

### 产品 LOGO

请将你的产品 LOGO 命名为 "{APP_CODE}.png"（APP_CODE 是你的应用 ID），并分别放在最外层目录和 static/img 目录下。
最外层目录下的 LOGO 用于通过 "S-mart应用" 方式部署时自动识别产品 LOGO，避免实施团队的需要手动上传 LOGO。
static/img 目录下的 LOGO 用于浏览器标签页识别 icon，提升产品体验。

## 分支管理

- master

master 是主分支。

- release

release 作为部署和发包分支，由 GitLab CI 自动从 master 获取，并在 CI 中运行前端打包后推送到仓库。
该分支支持在蓝鲸开发者中心源码部署进行联调测试，后续可以考虑自动部署。
该分支作为发布分支，支持在实施时通过"一键打包"等工具拉取包含打包好的前端资源的产品代码，并在客户环境通过 "S-mart应用" 方式部署。

## 集成工具说明

### pre-commit

### GitLab CI
