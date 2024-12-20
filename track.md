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

## 错误

### `Error Failed to create a symbolic link from`

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

### [Exception in thread "main" java.util.zip.ZipException: zip END header not found](https://stackoverflow.com/questions/73168883/exception-in-thread-main-java-util-zip-zipexception-zip-end-header-not-found)

### `Exception in thread "main" java.io.IOException: Downloading from https://services.gradle.org/distributions/gradle-8.9-bin.zip failed: timeout`

方式 1：设置代理 `src-tauri\gen\android\gradle.properties`

```
systemProp.https.proxyHost=127.0.0.1
systemProp.https.proxyPort=7890
systemProp.http.proxyHost=127.0.0.1
systemProp.http.proxyPort=7890
```

方式 2：手动下载文件后改成本地地址 `gradle\wrapper\gradle-wrapper.properties`

```
# distributionUrl=https\://services.gradle.org/distributions/gradle-8.9-bin.zip
distributionUrl=file\:/D:/zone/gradle-8.9-bin.zip
```

### `error sending request for url`

`"beforeDevCommand": "pnpm dev --host"`

[[bug] error sending request for url (http://192.168.0.x:1420/) on iOS](https://github.com/tauri-apps/tauri/issues/9509)

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
