# 发布与恢复

发布前完成来源审核及格式检查。本流程不自动审核或合并投稿，用户只要整理时只交付本地修改。

## 清单

将各次 add 返回的 files 去重写入 `.local/files.json`，例如以下路径结构（不是预先存在的文件）：

```json
["cases/web/interactive-atlas.md", "cases/web/README.md", "records/web/interactive-atlas.json"]
```

plan 默认目标 zender555/awesome-gpt6、main，远端分支必须存在。其他兼容仓库明确传 `--repository OWNER/REPO`，其他已存在分支传 `--branch BRANCH`。不从登录用户推断发布对象。

plan 记录文件路径、字节数、SHA-256、Git blob SHA 与远端基准；Agent 须阅读 diff 和新增文件，核查来源、许可与隐私。清单与缓存保存在 .local，不上传。

若本机 Git 网络不可达但连接器正常，先通过连接器实际读取目标分支最新提交，再给 plan 传 `--base-commit 完整SHA --remote-verified`，避免被本机网络阻塞。此参数仅用于刚从可信远端读取的 SHA，不能拿缓存或猜测值冒充核验；在接力记录中写明来源。上传仍走连接器。Git 无法 fetch 时，逐一用连接器读取目标分支文件的 blob SHA，与清单比较；不要声称运行了未成功的 verify-release。

## Git

仅在本任务授权发布且内容已审核时执行 `publish --authorized`。这个参数不是绕过 Agent 权限系统的机制。

脚本依次核对清单、获取远端状态；完全匹配则返回 already-published。否则要求远端基准未变、本地 HEAD 和分支一致、暂存区为空，只暂存清单文件并核对 blob，使用已有 Git 身份 commit，保存旁边的 `.state.json` 后以明确 refspec 无强推上传，再 fetch 验证。

它不创建凭据、不登录、不编造作者身份、不自动 rebase/reset、不改分支保护。没有身份或登录就用其他通道。有已准备好的本地提交时先审阅精确范围，再用原生 Git 推送并 verify-release；不要为迁就脚本丢弃提交。用户要求 PR 时在独立分支准备和创建 PR，合并须符合任务授权。

## 连接器

现场读取可用工具 schema。获取当前分支 commit/tree，检查与 baseCommit 一致；二进制 create_blob 使用 base64，文本可用 create_tree 的 content。

create_tree 必须以当前 tree 为 base_tree_sha，只添加清单条目；create_commit parent 为当前分支提交，update_ref 非强制。不能省略 base tree 而删除其他文件，也不在同一分支并发修改同路径。403 按登录参考处理，传输错误换可用通道。

## 网页与恢复

按 GitHub 参考中的目录分组方式上传；README 最后。逐组发布可能短暂出现中间版本，但最终必须核对完整清单。

```powershell
node $curator verify-release --repo . --manifest .local/release.json
```

该命令 fetch 目标分支并逐文件比较 blob。随后检查同一提交的 Actions、案例页面、索引与图片；文件落盘不等于页面与 CI 通过。

- 全部匹配：不重复提交，继续 UI/CI 验收。
- 部分匹配：先列已发布和缺失项，只续传缺失项；最终仍验证完整清单。
- 本地指纹变了：重新审核并 plan，不复用旧清单。
- 远端变了：读新提交、保护他人修改，整合后重做清单；不强推或自动 reset。
- push 中断：使用同一清单重跑；`.state.json` 记录提交，脚本先查远端以防重复 commit。
- 暂存后提交前失败：保留并检查暂存区；确认全部来自本次任务后手动完成或处理，不能自动清空。
- 远端不可读：保留提交、清单、接力说明，报告“远端状态未知”。

声明发布完成前，必须有完整文件验证、对应检查和页面证据。部分完成或待核实信息明确写入交付。
