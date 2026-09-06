# GitHub 登录、权限与传输

必须分别确认：登录身份、App 安装、目标仓库授权、网络。公共仓库能读、用户 admin=true，不代表连接器可以写。

## 通道优先级

1. Git 已有凭据：用 publish 脚本。脚本禁止弹出交互登录，不会无限等待。
2. 当前 GitHub 连接器可用：现场发现工具并读实际 schema；查身份、仓库、App 安装与仓库范围。
3. Git/连接器不可用但浏览器已登录：网页上传。不得提取 Cookie/令牌到 shell。

有 GitHub CLI 时 `gh auth status`；需登录可使用官方 `gh auth login --hostname github.com --web`，用户完成身份验证。不要输出 `gh auth token`，不为绕过网页登录而创建新 PAT。

## 403：身份授权不等于仓库安装

故障表现：get_profile 成功、get_repo 用户 admin=true，但 create_tree 返回 `403 Resource not accessible by integration`。

1. 打开 [GitHub 应用安装列表](https://github.com/settings/installations)。
2. 找到 ChatGPT Codex Connector → Configure，核对安装账号为仓库所有者且选中目标仓库。
3. 未安装时打开 [官方连接器应用](https://github.com/apps/chatgpt-codex-connector)，确认开发者 openai，从页面安装入口继续。
4. 已授权修复接入时选择 Only select repositories，仅选目标仓库。平台要求用户确认的权限步骤交给用户；超出任务范围的授权不能自行扩大。
5. Confirm access/MFA 时保留页面让用户完成。已有授权不重复索要，验证完成后读最新页面继续。
6. 安装后确认仓库范围，再尝试写入。不要把登录用户授权和 App 仓库安装混为一谈。

不把个人安装 ID、会话信息或标签 ID 写入 Skill；每次现场发现。

## 故障决策

| 现象 | 行动 |
| :--- | :--- |
| gh 不存在 | 用可用连接器/浏览器，无需强制安装 CLI |
| TLS、ERR_CONNECTION_CLOSED | `git ls-remote origin refs/heads/main` 与浏览器分别确认，保存本地成果等待网络 |
| 连接器 Transport send error、浏览器正常 | 换网页通道，不反复修改权限 |
| App 安装正确仍 403 | 检查具体权限、组织限制、分支保护 |
| Commit/push 后超时 | 先核对远端，不能立即重复提交 |

同类错误最多两次有依据的重试，再换通道或报告阻塞。禁止关闭 TLS 校验、擅改系统代理、撤销整个连接器试错。等待用户前先完成本地文件、校验与清单。

## 网页上传

使用当前工具文档支持的浏览器操作 API，取得新鲜句柄。不要复用其他 Agent 的变量或过期元素编号。

通过 Add file → Upload files 进入，核对页面标题中的目标目录。目录 URL 形式为 `/OWNER/REPO/upload/BRANCH/DIRECTORY`。多文件选择只按文件名落到当前目录，所以必须按清单父目录分组，不能把子目录文件全部上传根目录。

- 先注册 filechooser 等待，再点击当前上传按钮，选择清单对应绝对路径。及时处理异步 rejection，避免会话被未处理 Promise 重置。
- 等每个文件名显示为已上传，才填写提交信息并 Commit。
- 等 GitHub 处理完成并返回仓库页，再导航下一目录，否则可能 ERR_ABORTED。
- 自动翻译会改变按钮文字；每轮动作后重新读 UI。远端文件真实名称用 Git 核对。
- 素材与子目录先上传，README 等入口最后上传；分组上传产生多个提交，只有整个清单验证完成才算全部发布。
- 不使用浏览器私有接口或提取凭据。结果未知先查询，不盲目重试。
