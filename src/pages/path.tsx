import { useState } from 'react';
import { useAsyncEffect } from 'ahooks';
import {
  appCacheDir,
  appConfigDir,
  appDataDir,
  appLocalDataDir,
  appLogDir,
  audioDir,
  cacheDir,
  configDir,
  dataDir,
  delimiter,
  desktopDir,
  documentDir,
  downloadDir,
  executableDir,
  fontDir,
  homeDir,
  localDataDir,
  pictureDir,
  publicDir,
  resourceDir,
  runtimeDir,
  sep,
  tempDir,
  templateDir,
  videoDir,
} from '@tauri-apps/api/path';

export default function () {
  const [paths, setPaths] = useState<Record<string, string | null>>({});

  useAsyncEffect(async () => {
    const appCacheDirPath = await appCacheDir().catch((_e) => 'error');
    const appConfigDirPath = await appConfigDir().catch((_e) => 'error');
    const appDataDirPath = await appDataDir().catch((e) => e);
    const appLocalDataDirPath = await appLocalDataDir().catch((_e) => 'error');
    const appLogDirPath = await appLogDir().catch((_e) => 'error');
    const audioDirPath = await audioDir().catch((_e) => 'error');
    const cacheDirPath = await cacheDir().catch((_e) => 'error');
    const configDirPath = await configDir().catch((_e) => 'error');
    const dataDirPath = await dataDir().catch((_e) => 'error');
    const delimiterName = delimiter();
    const desktopDirPath = await desktopDir().catch((_e) => 'error');
    const documentDirPath = await documentDir().catch((_e) => 'error');
    const downloadDirPath = await downloadDir().catch((_e) => 'error');
    const executableDirPath = await executableDir().catch((_e) => 'error');
    const fontDirPath = await fontDir().catch((_e) => 'error');
    const homeDirPath = await homeDir().catch((_e) => 'error');
    const localDataDirPath = await localDataDir().catch((_e) => 'error');
    const pictureDirPath = await pictureDir().catch((_e) => 'error');
    const publicDirPath = await publicDir().catch((_e) => 'error');
    const resourceDirPath = await resourceDir().catch((_e) => 'error');
    const runtimeDirPath = await runtimeDir().catch((_e) => 'error');
    const separator = sep();
    const tempDirPath = await tempDir().catch((_e) => 'error');
    const templateDirPath = await templateDir().catch((_e) => 'error');
    const videoDirPath = await videoDir().catch((_e) => 'error');
    setPaths({
      appCacheDirPath,
      appConfigDirPath,
      appDataDirPath,
      appLocalDataDirPath,
      appLogDirPath,
      audioDirPath,
      cacheDirPath,
      configDirPath,
      dataDirPath,
      delimiterName,
      desktopDirPath,
      documentDirPath,
      downloadDirPath,
      executableDirPath,
      fontDirPath,
      homeDirPath,
      localDataDirPath,
      pictureDirPath,
      publicDirPath,
      resourceDirPath,
      runtimeDirPath,
      separator,
      tempDirPath,
      templateDirPath,
      videoDirPath,
    });
  }, []);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>appCacheDirPath</td>
            <td>{paths?.appCacheDirPath}</td>
          </tr>
          <tr>
            <td>appConfigDirPath</td>
            <td>{paths?.appConfigDirPath}</td>
          </tr>
          <tr>
            <td>appDataDirPath</td>
            <td>{paths?.appDataDirPath}</td>
          </tr>
          <tr>
            <td>appLocalDataDirPath</td>
            <td>{paths?.appLocalDataDirPath}</td>
          </tr>
          <tr>
            <td>appLogDirPath</td>
            <td>{paths?.appLogDirPath}</td>
          </tr>
          <tr>
            <td>audioDirPath</td>
            <td>{paths?.audioDirPath}</td>
          </tr>
          <tr>
            <td>cacheDirPath</td>
            <td>{paths?.cacheDirPath}</td>
          </tr>
          <tr>
            <td>configDirPath</td>
            <td>{paths?.configDirPath}</td>
          </tr>
          <tr>
            <td>dataDirPath</td>
            <td>{paths?.dataDirPath}</td>
          </tr>
          <tr>
            <td>delimiterName</td>
            <td>{paths?.delimiterName}</td>
          </tr>
          <tr>
            <td>desktopDirPath</td>
            <td>{paths?.desktopDirPath}</td>
          </tr>
          <tr>
            <td>documentDirPath</td>
            <td>{paths?.documentDirPath}</td>
          </tr>
          <tr>
            <td>downloadDirPath</td>
            <td>{paths?.downloadDirPath}</td>
          </tr>
          <tr>
            <td>executableDirPath</td>
            <td>{paths?.executableDirPath}</td>
          </tr>
          <tr>
            <td>fontDirPath</td>
            <td>{paths?.fontDirPath}</td>
          </tr>
          <tr>
            <td>homeDirPath</td>
            <td>{paths?.homeDirPath}</td>
          </tr>
          <tr>
            <td>localDataDirPath</td>
            <td>{paths?.localDataDirPath}</td>
          </tr>
          <tr>
            <td>pictureDirPath</td>
            <td>{paths?.pictureDirPath}</td>
          </tr>
          <tr>
            <td>publicDirPath</td>
            <td>{paths?.publicDirPath}</td>
          </tr>
          <tr>
            <td>resourceDirPath</td>
            <td>{paths?.resourceDirPath}</td>
          </tr>
          <tr>
            <td>runtimeDirPath</td>
            <td>{paths?.runtimeDirPath}</td>
          </tr>
          <tr>
            <td>separator</td>
            <td>{paths?.separator}</td>
          </tr>
          <tr>
            <td>tempDirPath</td>
            <td>{paths?.tempDirPath}</td>
          </tr>
          <tr>
            <td>templateDirPath</td>
            <td>{paths?.templateDirPath}</td>
          </tr>
          <tr>
            <td>videoDirPath</td>
            <td>{paths?.videoDirPath}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
