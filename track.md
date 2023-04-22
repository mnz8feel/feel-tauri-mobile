## track

`create-tauri-app --mobile --alpha`

```
$ create-tauri-app --mobile --alpha
✔ Project name · feel-tauri-mobile
✔ Choose which language to use for your frontend · TypeScript / JavaScript - (pnpm, yarn, npm)
✔ Choose your package manager · pnpm
✔ Choose your UI template · React - (https://reactjs.org/)
✔ Choose your UI flavor · TypeScript
```

`pnpm i`
`pnpm tauri android init`

`pnpm tauri android dev` 第一次执行会下载一些东西，需要注意网络情况，有些错误是网络原因

### 错误

`Error Failed to create a symbolic link from`

```
Creation symbolic link is not allowed for this system.

For Windows 10 or newer:
You should use developer mode.
See https://docs.microsoft.com/en-us/windows/apps/get-started/enable-your-device-for-development

For Window 8.1 or older:
You need `SeCreateSymbolicLinkPrivilege` security policy.
See https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/create-symbolic-links
 ELIFECYCLE  Command failed with exit code 1.
```

遇到错误，开启 Windows 开发者模式
Windows 搜索 Developer Mode

[Exception in thread "main" java.util.zip.ZipException: zip END header not found](https://stackoverflow.com/questions/73168883/exception-in-thread-main-java-util-zip-zipexception-zip-end-header-not-found)

## version

```
Android Studio Flamingo | 2022.2.1
Build #AI-222.4459.24.2221.9862592, built on March 31, 2023
Runtime version: 17.0.6+0-b2043.56-9586694 amd64
VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
Windows 10 10.0
GC: G1 Young Generation, G1 Old Generation
Memory: 1280M
Cores: 12
Registry:
    external.system.auto.import.disabled=true
    ide.text.editor.with.preview.show.floating.toolbar=false
    gradle.version.catalogs.dynamic.support=true
```
